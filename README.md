This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Its meant to be a POC for an issue with Radix Themes, Tailwind, and NextJS that is visible in production build of NextJS only - issue does not appear on dev server. I'm a bit of a newb to all these, so hopefully it's something obvious.

# POC of weird render issue

## Setup

```
pnpm i
```

## POC

If you run:

```
npm run dev
```

You will see 2 buttons at the bottom of the page.

If you run:

```
npm run start
```

You will see just the one button at the bottom of the page.

The second button, using the Radix button theme style "submit" is being rendered transparently via the tailwind styles.

Its either a style ordering issue, or something else. Please help me!!!

One workaround i've found is to disable Tailwind preflight:

```tailwind.config.js
corePlugins: {
    preflight: false,
  },
```

But i'm not sure i want to do that? In my other main project, this has all sorts of other reprocussions.

Help!!!
