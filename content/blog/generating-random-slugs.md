---
title: 'Generating Random Slugs'
date: 2022-01-21
description: 'On generating better identifiers for blank files in any tool'
---

Designers, coders, anyone making creative work on a computer
wind up with tons of files.
It's an integral part of the process
to be able to spin up files quickly
in order to capture an idea.
But when those files are all called "Untitled"
it gets unwieldy to find your past work.

Developer-focused tools have a leg up on this problem.
On [Netlify](#) or [Squarespace](#), for example,
a new project will come with a randomly generated "slug" that looks something like
`solecisms-missuited.netlify.app` as opposed to `Untitled`

The difference is sharper when you look at a list of projects:

```md
# A
overadvertising-maydays
nonmilitary-unwreathed
chattiness-shillings
upcurls-jakata

# B
untitled
untitled
untitled
untitled
```

For me, it's much easier to recall and find the versions with unique names.
Since not every tool supports this naming convention,
I wrote a script that lets me generate and copy these random slugs
with minimal friction.

(I wrote this in Ruby because it's a fun and beautiful language,
but the broad strokes will be similar in anything like Node or even Bash)

```rb
#!/usr/bin/env ruby

require 'net/http'
require 'uri'
require 'json'

uri = URI.parse("https://random-word-api.herokuapp.com/word?number=2")
response = Net::HTTP.get_response uri
words = JSON.parse(response.body)
result = words.join("-")

if system "printf %s #{result} | pbcopy"
	puts "#{result} copied to clipboard"
end
```

To start, we need a source of random words.
I found the excellent [Random Word API](https://random-word-api.herokuapp.com)
which conveniently has a "Do What the F\*uck You Want" [license](https://choosealicense.com/licenses/wtfpl/#)

Getting a two word pair in Ruby looks like this:

```rb
# load helper functions from the standard library
require 'net/http'
require 'uri'
require 'json'

# ask the random word api for two words
# this gives us a JSON response that looks like
# "["wordsmiths","svelte"]"
uri = URI.parse("https://random-word-api.herokuapp.com/word?number=2")
response = Net::HTTP.get_response uri

# parse the response from JSON into a Ruby array
words = JSON.parse(response.body)

# then stick them together separated by a "-"
result = words.join("-")
```

With random pair of words in hand,
the next step is to get them into whatever app you're using.
Rather than write plugins and such for every app,
the easiest thing to do was to put the words into the clipboard.

In ruby `system` executes a command in the system shell
and returns true if the command succeeds.
Here we're piping the result string onto the clipboard
using `pbcopy`

```rb
if system "printf %s #{result} | pbcopy"
	puts "#{result} copied to clipboard"
end
```

If you then add this script to your system's `PATH` —
like I do in my [dotfiles](https://github.com/jmegs/dotfiles/blob/main/config/fish/config.fish#L5) —
it will be available in every terminal. 
Anytime you need to name a new file, 
it's as simple as typing `random-slug` into terminal
and pasting the result.
