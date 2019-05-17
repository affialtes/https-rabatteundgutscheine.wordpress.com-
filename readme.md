<<<<<<< HEAD
# The Cayman theme

[![Build Status](https://travis-ci.org/pages-themes/cayman.svg?branch=master)](https://travis-ci.org/pages-themes/cayman) [![Gem Version](https://badge.fury.io/rb/jekyll-theme-cayman.svg)](https://badge.fury.io/rb/jekyll-theme-cayman)

*Cayman is a Jekyll theme for GitHub Pages. You can [preview the theme to see what it looks like](http://pages-themes.github.io/cayman), or even [use it today](#usage).*

![Thumbnail of Cayman](thumbnail.png)

## Usage

To use the Cayman theme:

1. Add the following to your site's `_config.yml`:

    ```yml
    theme: jekyll-theme-cayman
    ```

2. Optionally, if you'd like to preview your site on your computer, add the following to your site's `Gemfile`:

    ```ruby
    gem "github-pages", group: :jekyll_plugins
    ```

## Customizing

### Configuration variables

Cayman will respect the following variables, if set in your site's `_config.yml`:

```yml
title: [The title of your site]
description: [A short description of your site's purpose]
```

Additionally, you may choose to set the following optional variables:

```yml
show_downloads: ["true" or "false" to indicate whether to provide a download URL]
google_analytics: [Your Google Analytics tracking ID]
```

### Stylesheet

If you'd like to add your own custom styles:

1. Create a file called `/assets/css/style.scss` in your site
2. Add the following content to the top of the file, exactly as shown:
    ```scss
    ---
    ---

    @import "{{ site.theme }}";
    ```
3. Add any custom CSS (or Sass, including imports) you'd like immediately after the `@import` line

*Note: If you'd like to change the theme's Sass variables, you must set new values before the `@import` line in your stylesheet.*

### Layouts

If you'd like to change the theme's HTML layout:

1. [Copy the original template](https://github.com/pages-themes/cayman/blob/master/_layouts/default.html) from the theme's repository<br />(*Pro-tip: click "raw" to make copying easier*)
2. Create a file called `/_layouts/default.html` in your site
3. Paste the default layout content copied in the first step
4. Customize the layout as you'd like

### Overriding GitHub-generated URLs

Templates often rely on URLs supplied by GitHub such as links to your repository or links to download your project. If you'd like to override one or more default URLs:

1. Look at [the template source](https://github.com/pages-themes/cayman/blob/master/_layouts/default.html) to determine the name of the variable. It will be in the form of `{{ site.github.zip_url }}`.
2. Specify the URL that you'd like the template to use in your site's `_config.yml`. For example, if the variable was `site.github.url`, you'd add the following:
    ```yml
    github:
      zip_url: http://example.com/download.zip
      another_url: another value
    ```
3. When your site is built, Jekyll will use the URL you specified, rather than the default one provided by GitHub.

*Note: You must remove the `site.` prefix, and each variable name (after the `github.`) should be indent with two space below `github:`.*

For more information, see [the Jekyll variables documentation](https://jekyllrb.com/docs/variables/).

## Roadmap

See the [open issues](https://github.com/pages-themes/cayman/issues) for a list of proposed features (and known issues).

## Project philosophy

The Cayman theme is intended to make it quick and easy for GitHub Pages users to create their first (or 100th) website. The theme should meet the vast majority of users' needs out of the box, erring on the side of simplicity rather than flexibility, and provide users the opportunity to opt-in to additional complexity if they have specific needs or wish to further customize their experience (such as adding custom CSS or modifying the default layout). It should also look great, but that goes without saying.

## Contributing

Interested in contributing to Cayman? We'd love your help. Cayman is an open source project, built one contribution at a time by users like you. See [the CONTRIBUTING file](docs/CONTRIBUTING.md) for instructions on how to contribute.

### Previewing the theme locally

If you'd like to preview the theme locally (for example, in the process of proposing a change):

1. Clone down the theme's repository (`git clone https://github.com/pages-themes/cayman`)
2. `cd` into the theme's directory
3. Run `script/bootstrap` to install the necessary dependencies
4. Run `bundle exec jekyll serve` to start the preview server
5. Visit [`localhost:4000`](http://localhost:4000) in your browser to preview the theme

### Running tests

The theme contains a minimal test suite, to ensure a site with the theme would build successfully. To run the tests, simply run `script/cibuild`. You'll need to run `script/bootstrap` one before the test script will work.
=======
# CircleCI Enterprise Setup

This package allows you to easily orchestrate your CCIE cluster in AWS using Terraform.

# Getting Started

## Pre Reqs

- Terraform

## Installation

### Basic

1. Clone or download this repository
1. Execute `make init` or save a copy of `terraform.tfvars.template` to `terraform.tfvars`
1. Fill in the configuration vars in `terraform.tfvars` for your cluster. see [Configuration](#configuration)
1. Run `terraform init` to install Terraform plugins.
1. Run `terraform apply`
1. Once your installation has finished, you can use [our realitycheck repo](https://github.com/circleci/realitycheck) to check basic CircleCI functionality

### Teardown

1.  
    1. If you set `services_termination_protection_disabled=false` in `terraform.tfvars`, skip this step.
    
    1. Manually disable termination protection in the AWS UI.  To do this, go to the EC2 Management Console, locate the services box instance, select it and click `Actions` -> `Change Termination Protection`.

1.
    1. If you set `force_destroy_s3_bucket=true` in `terraform.tfvars`, skip this step.
    1. In the AWS Management Console, locate the S3 bucket associated with your CircleCI cluster and delete all its contents.

1. Run `terraform destroy` to destroy all EC2 instances, IAM roles, ASGs and Launch configurations created by `terraform apply`.

## Configuration

To configure the cluster that terraform will create, simply fill out the terraform.tfvars file. The following are all required vars:

  | Var      | Description |
  | -------- | ----------- |
  | aws_access_key | Access key used to create instances |
  | aws_secret_key | Secret key used to create instances |
  | aws_region | Region where instances get created |
  | aws_vpc_id | The VPC ID where the instances should reside |
  | aws_subnet_id | The subnet-id to be used for the instance |
  | aws_ssh_key_name |  The SSH key to be used for the instances|
  | circle_secret_passphrase | Decryption key for secrets used by CircleCI machines |

Optional vars:

  | Var      | Description | Default |
  | -------- | ----------- | ------- |
  | services_instance_type | Instance type for the centralized services box.  We recommend a m4 instance | m4.2xlarge |
  | builder_instance_type | Instance type for the 1.0 builder machines.  We recommend a r3 instance | r3.2xlarge |
  | max_builders_count | Max number of 1.0 builders | 2 |
  | nomad_client_instance_type | Instance type for the nomad clients (2.0 builders). We recommend a XYZ instance | m4.xlarge |
  | max_clients_count | Max number of nomad clients | 2 |
  | prefix   | Prefix for resource names | circleci |
  | enable_nomad | Provisions a nomad cluster for CCIE v2 | 1 |
  | enable_route | Enable creating a Route53 route for the Services box | 0 |
  | route_name | Route name to configure for Services box | "" |
  | route_zone_id | Zone to configure route in | "" |
  | services_user_data_enabled | Set to 0 to disable automated installation on Services Box | 1 |
  | force_destroy_s3_bucket | Add/Remove ability to forcefully destroy S3 bucket | false |
  | services_disable_api_termination | Protect the services instance from API termination | true |
>>>>>>> upstream/master
