# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Upload files for translation

```console
yarn crowdin upload
```

### Download latest translation files

```console
yarn crowdin download
```

### Run local site with different locale

```console
yarn start --locale fr
```

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


# Translators

Be careful to know which strings should not be translated. You can find more information on 
[Docusaurus' site](https://docusaurus.io/docs/i18n/crowdin#translate-the-sources) about which 
should never be translated.
