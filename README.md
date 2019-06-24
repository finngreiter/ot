# ot
Automate everything!
## Getting Started
Run ```npm i -g ot``` in your terminal to install ot.
In your project, create a file called ```otlist.json```, this is where all of your automation tasks will live.

Example ```otlist.json```

```json
{
  "compile": ["tsc index.ts", "tsc ./files/tests.ts"],
  "publish": ["git add .", "git commit", "git push"]
}
```

Now, if you run ```ot compile``` it runs ```tsc index.ts``` and ```tsc ./files/tests/ts```. Same for ```publish```

You can create as many tasks as you want.
