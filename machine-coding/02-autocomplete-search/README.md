# Machine Coding: Search Autocomplete / Typeahead

## Requirements
- Debounced search input (300ms)
- Request cancellation via AbortController on new keystrokes
- Keyboard navigation: ArrowUp, ArrowDown, Enter, Escape
- Highlight matching query substrings in results
- In-memory cache with LRU / TTL
