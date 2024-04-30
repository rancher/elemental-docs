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
        "custom-install",
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
        "managedosversionchannel-reference",
        "managedosversion-reference",
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
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "How to",
      "items": [
        "custom-images",
        "elemental_behind_proxy",
        "hostname",
        {
          "type": "category",
          "collapsible": true,
          "collapsed": true,
          "label": "Customize networking",
          "link": {"type": "doc", "id": "networking"},
          "items": [
            "networking-vlans",
            "wifi"
          ]
        },
        "ntp",
        "rancher-vmware",
        "removable-device-cloudconfig",
        "custom-certificate",
        "airgap",
        "raspi-disk",
        "tpm"
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
