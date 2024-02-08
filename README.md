# Elemental docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service with the following command:

```console
yarn serve
```

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Docs versioning

Generating a new versioned docs from local environment is as simple as running the following command:

```console
yarn run docusaurus docs:version <new_version>
```

Where `<new_version>` should be replaced by the actual version number (e.g. `1.4`)

### Check the versioning

The versioning command will generate the following content:

* The entry `Stable` will be added (again) to the `/versions.json` file

* `/versioned_docs/version-Stable` will be updated with the `Next` content located in `/docs`

* `/versioned_sidebars/version-Stable-sidebars.json` will be updated with the `Next` sidebar content located in `/sidebar.js`

## Recommendations before creating a Pull Request

Before creating a Pull Request for adding new docs or creating a new version, it's strongly encouraged to build the docs site [as described above](#build)
