# Next.js Nuqs Usage

![EkranKayd2025-08-2615 50 23-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/5c9fce19-2f5a-4729-9a5c-3e87d58d529c)


This project demonstrates URL search parameter management using Next.js 15 and the [nuqs](https://nuqs.vercel.app/) library. OMDB API is used for movie search.

## Key Features

- URL search parameters are automatically managed
- Server-side and client-side synchronization
- TypeScript support
- Debounced search

## Nuqs Advantages

✅ **Simpler API than useSearchParams** - Easier to use

✅ **State persists in URL** → doesn't get lost even when page refreshes

✅ **Compatible with Server Components** - Next.js 13+ App Router support

✅ **Makes pagination, filter, sort UI states shareable** - You can share URLs with others

## Environment Variables

Create a `.env.local` file:

```env
OMDB_API_KEY=your_omdb_api_key_here
```

You can get an API key from [OMDB API](http://www.omdbapi.com/).
