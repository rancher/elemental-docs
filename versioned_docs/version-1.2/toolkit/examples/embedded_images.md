---
title: "Creating embedded images"
sidebar_label: "Creating embedded images"
---

This guide will guide in a step-by-step process to build a derivative which is fully compatible with Elemental, and will illustrate how to make customization on such image, by adding for example a default set of services and a custom user.

The derivative will be based on openSUSE and embed k3s, and a custom user `joe` which will be already set to allow us to login.

## Prerequisites

- Docker installed

## 1) Create a Dockerfile

Let's create a workspace directory and move into it:

```bash
$> mkdir derivative
$> cd derivative
```

Let's create now a `Dockerfile` for our image inside that directory, which will be represent running system:

```Dockerfile
FROM ghcr.io/rancher/elemental-toolkit/elemental-cli:v0.11.0 AS elemental

FROM registry.suse.com/suse/sle-micro-rancher/5.2
ARG K3S_VERSION=v1.20.4+k3s1
ARG ARCH=amd64
ENV ARCH=${ARCH}

COPY --from=elemental /install-root /
COPY --from=elemental /usr/bin/elemental /usr/bin/elemental

# Install k3s server/agent
ENV INSTALL_K3S_VERSION=${K3S_VERSION}
RUN curl -sfL https://get.k3s.io > installer.sh && \
    INSTALL_K3S_SKIP_START="true" INSTALL_K3S_SKIP_ENABLE="true" sh installer.sh && \
    INSTALL_K3S_SKIP_START="true" INSTALL_K3S_SKIP_ENABLE="true" sh installer.sh agent && \
    rm -rf installer.sh

## System layout

# Required by k3s etc.
RUN mkdir /usr/libexec && touch /usr/libexec/.keep

# Copy custom files
# COPY files/ /

# Copy cloud-init default configuration
COPY cloud-init.yaml /system/oem/

# Generate initrd
RUN elemental init --force

# OS level configuration
RUN echo "VERSION=999" > /etc/os-release
RUN echo "GRUB_ENTRY_NAME=derivative" >> /etc/os-release
RUN echo "welcome to our derivative" >> /etc/issue.d/01-derivative

# Copy cloud-init default configuration
COPY cloud-init.yaml /system/oem/
```

## 2) Configuration

At the end of the Dockerfile, you can see that we copy over a custom [cloud-init](../reference/cloud_init) file:

```Dockerfile
# Copy cloud-init default configuration
COPY cloud-init.yaml /system/oem/
```

Create a `cloud-init.yaml` file as the `derivative/cloud-init.yaml` with the following content:

```yaml
# See https://rancher.github.io/elemental-toolkit/docs/reference/cloud_init/ for a full syntax reference
name: "Default settings"
stages:
   initramfs:
     # Setup default hostname
     - name: "Branding"
       hostname: "derivative"
     # Setup an admin group with sudo access
     - name: "Setup groups"
       ensure_entities:
       - entity: |
            kind: "group"
            group_name: "admin"
            password: "x"
            gid: 900
     # Setup network - openSUSE specific
     - name: "Network setup"
       files:
       - path: /etc/sysconfig/network/ifcfg-eth0
         content: |
                  BOOTPROTO='dhcp'
                  STARTMODE='onboot'
         permissions: 0600
         owner: 0
         group: 0
     # Setup a custom user
     - name: "Setup users"
       users:
       # Replace the default user name here and settings
        joe:
          # Comment passwd for no password
          passwd: "joe"
          shell: /bin/bash
          homedir: "/home/joe"
          groups:
          - "admin"
       #authorized_keys:
       # Replace here with your ssh keys
       # joe: 
       # - ssh-rsa ....
     # Setup sudo
     - name: "Setup sudo"
       files:
       - path: "/etc/sudoers"
         owner: 0
         group: 0
         permsisions: 0600
         content: |
            Defaults always_set_home
            Defaults secure_path="/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/bin:/usr/local/sbin"
            Defaults env_reset
            Defaults env_keep = "LANG LC_ADDRESS LC_CTYPE LC_COLLATE LC_IDENTIFICATION LC_MEASUREMENT LC_MESSAGES LC_MONETARY LC_NAME LC_NUMERIC LC_PAPER LC_TELEPHONE LC_ATIME LC_ALL LANGUAGE LINGUAS XDG_SESSION_COOKIE"
            Defaults !insults
            root ALL=(ALL) ALL
            %admin ALL=(ALL) NOPASSWD: ALL
            @includedir /etc/sudoers.d
       commands:
       - passwd -l root
   # Setup persistency so k3s works properly
   # See also: https://rancher.github.io/elemental-toolkit/docs/reference/immutable_rootfs/#configuration-with-an-environment-file
   rootfs.after:
    - name: "Immutable Layout configuration"
      environment_file: /run/cos/cos-layout.env
      environment:
        VOLUMES: "LABEL=COS_OEM:/oem LABEL=COS_PERSISTENT:/usr/local"
        OVERLAY: "tmpfs:25%"
        RW_PATHS: "/var /etc /srv"
        PERSISTENT_STATE_PATHS: >-
          /etc/systemd
          /etc/rancher
          /etc/ssh
          /etc/iscsi 
          /etc/cni
          /home
          /opt
          /root
          /usr/libexec
          /var/log
          /var/lib/rancher
          /var/lib/kubelet
          /var/lib/NetworkManager
          /var/lib/longhorn
          /var/lib/cni
        PERSISTENT_STATE_BIND: "true"
   # Finally, let's start k3s when network is available, and download the SSH key from github for the joe user
   network:
     - name: "Start k3s"
       systemctl:
         start: 
         - k3s
     - authorized_keys:
     # Replace here with your ssh keys or github handle
        joe: 
        - github:joe
```

Done! We are now ready to build the container image.

The file structure should be like the following:

```
$> tree ./derivative
derivative
├── cloud-init.yaml
├── Dockerfile
├── iso.yaml
└── repositories.yaml
```

## 3) Build it!

Now we are ready to build our docker image:

```bash
$~/derivative> docker build -t derivative:latest .
...
 ---> Running in a9c33b42f567                              
Removing intermediate container a9c33b42f567                                                                           
 ---> 8e83191d29df                                                                                                     
Step 19/19 : COPY cloud-init.yaml /system/oem/                                                                         
 ---> 38cc4c8b173a                                                                                                     
Successfully built 38cc4c8b173a                                                                                        
Successfully tagged derivative:latest
```

After the process completed, we are ready to consume our docker image. If you push the image over a container registry, you can then or use a running `Elemental` system to upgrade to it, or deploy it directly [see getting started](../getting-started/install).

### Build an ISO image

We can at this point also create a ISO from it. 

Create a `manifest.yaml` file with the following content inside the `derivative` folder:

```yaml
iso:
  bootloader-in-rootfs: true
  grub-entry-name: "Derivative Installer"

squash-no-compression: true
```

Now, we can build the ISO with:

```bash
$~/derivative> elemental build-iso --config-dir=./ derivative:latest
....
INFO[0114] Copying BIOS kernels                       
INFO[0114] Create squashfs                            
Parallel mksquashfs: Using 8 processors
Creating 4.0 filesystem on /tmp/elemental-geniso4082786464/tempISO/rootfs.squashfs, block size 1048576.
....
INFO[0247] 🍹 Generate ISO derivative-0.20210909.iso     
xorriso 1.4.6 : RockRidge filesystem manipulator, libburnia project.

Drive current: -outdev 'stdio:derivative-0.20210909.iso'
Media current: stdio file, overwriteable
Media status : is blank
Media summary: 0 sessions, 0 data blocks, 0 data,  448g free
Added to ISO image: directory '/'='/tmp/elemental-geniso4082786464/tempISO'
xorriso : UPDATE : 599 files added in 1 seconds
xorriso : UPDATE : 599 files added in 1 seconds
xorriso : NOTE : Copying to System Area: 512 bytes from file '/tmp/elemental-geniso4082786464/tempISO/boot/x86_64/loader/boot_hybrid.img'
xorriso : WARNING : Boot image load size exceeds 65535 blocks of 512 bytes. Will record 0 in El Torito to extend ESP to end-of-medium.
libisofs: NOTE : Aligned image size to cylinder size by 137 blocks
xorriso : UPDATE :  12.35% done
xorriso : UPDATE :  42.73% done
ISO image produced: 282624 sectors
Written to medium : 282624 sectors at LBA 0
Writing to 'stdio:derivative-0.20210909.iso' completed successfully.
```

After the process completes, we should have a ISO in our folder ready to be used. See the [build ISOs section](../creating-derivatives/build_iso) for all the available options.


## Customization

Here follows a break down of the steps above

### Adding packages
Feel free to edit the Dockerfile with the packages you want to embed in our image. You can install any packages available in the openSUSE repositories by
tweaking 

```Dockerfile
# Install packages from the base image
RUN zypper in -y \
    .... # Add more packages here!
```

### System layout and k3s

We set some default layouts and install k3s:

```
# Install k3s server/agent
ENV INSTALL_K3S_VERSION=${K3S_VERSION}
RUN curl -sfL https://get.k3s.io > installer.sh && \
    INSTALL_K3S_SKIP_START="true" INSTALL_K3S_SKIP_ENABLE="true" sh installer.sh && \
    INSTALL_K3S_SKIP_START="true" INSTALL_K3S_SKIP_ENABLE="true" sh installer.sh agent && \
    rm -rf installer.sh

## System layout

# Required by k3s etc.
RUN mkdir /usr/libexec && touch /usr/libexec/.keep

# Copy custom files
# COPY files/ /

# Generate initrd
RUN elemental init --force

# OS level configuration
RUN echo "VERSION=999" > /etc/os-release
RUN echo "GRUB_ENTRY_NAME=derivative" >> /etc/os-release
RUN echo "welcome to our derivative" >> /etc/issue.d/01-derivative
```

As our target here is to install `k3s` we do install both k3s `agent` and `server`, so the image can work in both modes. Here we could have installed any service or binary that we want to embed in our container image. We setup the system layout by creating needed paths for `k3s` and set up a os-release which identifies the OS version. Afterward we regenerate the initrd which is required in order to boot, [see also the Initrd section](../creating-derivatives/creating_bootable_images/#initrd).

### Cloud-init, custom SSH access

The `cloud-init.yaml` file above configures a user, `joe` and attaches a ssh key to it in order to login. It also sets up a default password, which is optional.

To specify any additional ssh key installed within the user, we do:

```yaml
network:
- authorized_keys:
  joe: 
  - github:joe
```

which you can replace with your github handle, or by specifying directly an ssh key. In case you specify the SSH key directly, you don't need to run the step in the `network` stage.

The user will be part of the `admin` group which is allowed to use `sudo`.

As our target is to run `k3s`, but could have been any other service, we tweak the immutable setup by specifying sensible path required for `k3s` in order to function properly, see [immutable rootfs](../reference/immutable_rootfs) for all the available options.

Finally, we start k3s. Note, we could have tweaked that part slightly to provide `k3s` configurations via systemd env files, or boot up for example the agent instead of the server:

```yaml
   network:
     - if: '[ ! -f "/run/cos/recovery_mode" ]'
       name: "Setup k3s"
       # Setup environment file for custom k3s arguments
       environment_file: "/etc/systemd/system/k3s.service.env"
       environment:
         FOO: "bar"
       systemctl:
         start: 
         - k3s
     - commands:
       - |
        chmod 600 /etc/systemd/system/k3s.service.env
```
