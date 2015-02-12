# Synereo Website

Synereo website and blog content and templates. Based on [Jekyll](http://jekyllrb.com/).

## Prerequisites

[Ruby](https://www.ruby-lang.org/en/), probably pre-installed on your OS, or through your favorite package manager. RubyGems is also required, but should be available. Then:

```bash
$ gem install jekyll
```

## Dev

To get a local environment running on [http://localhost:4000](http://localhost:4000), run:

```bash
$ jekyll serve
```

## Post

Posts are markdown files that are located in the `_posts` directory. Create new a new post by editing:

```bash
$ touch _posts/2015-01-23-this-is-a-post.md
```

Need a [markdown quick reference](http://kramdown.gettalong.org/quickref.html)?

Drafts should go in `_drafts`, and can be previewed by adding `--drafts` to the `jekyll serve` command.

## Deploy

Deploying is as simple as pushing the default `master` branch to Github.

