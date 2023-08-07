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
        "customizing",
        "elemental-plans",
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
        "machineinventoryselectortemplate-reference",
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
      type: 'category',
      collapsible: true,
      collapsed: true,
      label: 'How to',
      items: [
        'wifi',
        'elemental_behind_proxy',
        'rancher-vmware',
        'removable-device-cloudconfig',
        'custom-certificate'
      ]
    },
    {
      type: 'category',
      collapsible: true,
      collapsed: true,
      label: 'Troubleshooting',
      items: [
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
