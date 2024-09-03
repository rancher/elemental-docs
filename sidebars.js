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
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Architecture",
      "link": {"type": "doc", "id": "architecture"},
      "items": [
        "architecture-components",
        "custom-resources",
        {
          "type": "category",
          "collapsible": true,
          "collapsed": true,
          "label": "Services",
          "link": {"type": "doc", "id": "architecture-services"},
          "items": [
            "architecture-machineonboarding",
            "architecture-clusterdeployment",
          ]
        },
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Install/Upgrade",
      "items": [
        "installation",
        "upgrade",
        "upgrade-lifecycle",
        "custom-install",
        "elemental-plans",
      ]
    },
    "authentication",
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Label Templates",
      "link": {"type": "doc", "id": "label-templates"},
      "items": [
        "smbios",
        "hardwarelabels",
        "label-templates-random",
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Declarative Networking",
      "items": [
        "networking",
        "networking-static",
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Reference",
      "items": [
        "cloud-config-reference",
        "machineregistration-reference",
        "machineinventory-reference",
        "machineinventoryselector-reference",
        "machineinventoryselectortemplate-reference",
        "managedosimage-reference",
        "managedosversionchannel-reference",
        "managedosversion-reference",
        "seedimage-reference",
        "cluster-reference",
        "elementaloperatorchart-reference",
        "kubernetesversions",
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
        "channels",
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
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "How to",
      "items": [
        "custom-images",
        "elemental_behind_proxy",
        "hostname",
        "ntp",
        "rancher-vmware",
        "removable-device-cloudconfig",
        "custom-certificate",
        "airgap",
        "raspi-disk",
        "tpm",
        "unmanaged-os"
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": 'Troubleshooting',
      "items": [
        {
          "type": "doc",
          "label": "Support",
          "id": "troubleshooting-support",
        },
        {
          "type": "doc",
          "label": "Rancher",
          "id": "troubleshooting-rancher-upgrades",
        },
        {
          "type": "doc",
          "label": "Restore",
          "id": "troubleshooting-restore",
        },
        {
          "type": "doc",
          "label": "Upgrade",
          "id": "troubleshooting-upgrade",
        },
        {
          "type": "doc",
          "label": "Reset",
          "id": "troubleshooting-reset",
        },
        {
          "type": "doc",
          "label": "Declarative Networking",
          "id": "troubleshooting-network",
        }
      ],
    },
    "release-notes",
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: "category",
      label: "Tutorial",
      items: ["hello"],
    },
  ],
   */
};

module.exports = sidebars;
