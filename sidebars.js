/**
 * Creating a sidebar enables you to:
        create an ordered group of docs
        render a sidebar for each doc of that group
        provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  "docs": [
    "index",
    {
      "type": "category",
      "collapsible": true,
      "collapsed": false,
      "label": "Quickstarts",
      "items": [
        "quickstart-ui",
        "quickstart-cli"
      ]
    },
    "architecture",
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Install/Upgrade",
      "items": [
        "installation",
        "upgrade",
        "upgrade-lifecycle",
        "customizing",
        "elemental-plans",
      ]
    },
    "authentication",
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Reference",
      "items": [
        "cloud-config-reference",
        "machineregistration-reference",
        "machineinventoryselectortemplate-reference",
        "managedosimage-reference",
        "cluster-reference",
        "seedimage-reference",
        "elementaloperatorchart-reference",
        "kubernetesversions",
        "smbios",
        "hardwarelabels",
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Operator",
      "items": [
        "inventory-management",
        "reset",
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Backup",
      "items": [
        "backup",
        "restore",
      ]
    },
    {
      "type": 'category',
      "collapsible": true,
      "collapsed": true,
      "label": 'How to',
      "items": [
        'wifi',
        'elemental_behind_proxy',
        'hostname',
        'rancher-vmware',
        'removable-device-cloudconfig',
        'custom-certificate',
        'airgap',
        'raspi-disk',
        'tpm'
      ]
    },
    {
      "type": 'category',
      "collapsible": true,
      "collapsed": true,
      "label": 'Troubleshooting',
      "items": [
        {
          "type": "category",
          "collapsible": true,
          "collapsed": true,
          "label": "Rancher",
          "items": [
            "troubleshooting-rancher-upgrades",
          ]
        },
        {
          "type": "category",
          "collapsible": true,
          "collapsed": true,
          "label": "Restore",
          "items": [
            "troubleshooting-restore",
          ]
        },
        {
          "type": "category",
          "collapsible": true,
          "collapsed": true,
          "label": "Upgrade",
          "items": [
            "troubleshooting-upgrade"
          ]
        },
        {
          "type": "category",
          "collapsible": true,
          "collapsed": true,
          "label": "Reset",
          "items": [
            "troubleshooting-reset"
          ]
        }
      ],
    },
    "release-notes",
  ],
  "toolkit": [
    "toolkit/index",
    {
      "type": "category",
      "collapsible": true,
      "collapsed": false,
      "label": "Getting Started",
      "items": [
        "toolkit/getting-started/download",
        "toolkit/getting-started/install",
        "toolkit/getting-started/upgrading",
        "toolkit/getting-started/recovery",
        "toolkit/getting-started/deploy"
      ],
    },
    {
      "type": "category",
      "label": "Customizing",
      "collapsible": true,
      "collapsed": true,
      "items": [
        "toolkit/customizing/stages",
        "toolkit/customizing/configuration_persistency",
        "toolkit/customizing/embedded_features",
        "toolkit/customizing/login",
        "toolkit/customizing/oem_configuration",
        "toolkit/customizing/runtime_persistent_changes",
        "toolkit/customizing/general_configuration",
        "toolkit/customizing/upgrades",
        "toolkit/customizing/configure_grub",
        "toolkit/customizing/selinux_support"
      ],
    },
    {
      "type": "category",
      "label": "Creating Derivatives",
      "collapsible": true,
      "collapsed": true,
      "items": [
        "toolkit/creating-derivatives/package_stack",
        "toolkit/creating-derivatives/creating_bootable_images",
        "toolkit/creating-derivatives/build_disk",
        "toolkit/creating-derivatives/build_iso"
      ],
    },
    {
      "type": "category",
      "label": "Examples",
      "items": [
        "toolkit/examples/creating_bootable_images",
        "toolkit/examples/cloud_config",
        "toolkit/examples/embedded_images"
      ],
    },
    {
      "type": "category",
      "label": "Tutorials",
      "items": [
        "toolkit/tutorials/k3s_and_fleet_on_vanilla_image_example",
        "toolkit/tutorials/trigger_upgrades_with_fleet"
      ],
    },
    {
      "type": "category",
      "label": "Reference",
      "items": [
        "toolkit/reference/cloud_init",
        "toolkit/reference/immutable_rootfs",
        "toolkit/reference/layout",
        "toolkit/reference/troubleshooting",
        "toolkit/reference/built_with_elemental",
        "toolkit/reference/high_level_architecture",
        {
          "type": "category",
          "label": "Command Line Interface",
          "items": [
            "toolkit/reference/elemental",
            "toolkit/reference/elemental_build-iso",
            "toolkit/reference/elemental_cloud-init",
            "toolkit/reference/elemental_convert-disk",
            "toolkit/reference/elemental_exit-codes",
            "toolkit/reference/elemental_install",
            "toolkit/reference/elemental_new",
            "toolkit/reference/elemental_pull-image",
            "toolkit/reference/elemental_reset",
            "toolkit/reference/elemental_run-stage",
            "toolkit/reference/elemental_upgrade",
            "toolkit/reference/elemental_version"
          ],
        },
      ],
    },
    {
      "type": "category",
      "label": "Development",
      "items": [
        "toolkit/development/creating_derivatives",
        "toolkit/development/dependencies"
      ],
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      "type": "category",
      label: "Tutorial",
      items: ["hello"],
    },
  ],
   */
};

module.exports = sidebars;
