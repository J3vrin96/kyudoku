# 🌐 External Sudoku API Integration

## Overview

Kyudoku fetches dynamically generated Sudoku puzzles from an external API rather than implementing its own puzzle generation algorithm. This approach allows us to focus on **frontend development** and **user experience** while leveraging existing, battle-tested sudoku generation services.

## Why Use an External API?

✅ **No custom puzzle generation logic needed** - Complex algorithm to eliminate (reduces scope)  
✅ **Dynamic difficulty levels** - Easy, Medium, Hard puzzles on demand  
✅ **Verified correctness** - External service guarantees valid puzzles  
✅ **Focus on assessment** - Time spent on UI/UX rather than game logic  

## API Configuration

**Service:** Sugoku  
**Endpoint:** Available at [sugoku.onrender.com](https://sugoku.onrender.com)

**Request:**
```
GET /board?difficulty=easy|medium|hard
```

**Response:**
```json
{
  "board": [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    ...
  ]
}
```

## Implementation

### Backend Endpoint: `/api/sudoku`

Located in `server/api/sudoku.ts`, this Nuxt API route:

1. **Validates** the difficulty parameter (`easy`, `medium`, `hard`)
2. **Proxies** requests to the external API with a 15-second timeout
3. **Handles errors** gracefully with a fallback hardcoded puzzle
4. **Logs errors** for debugging

### Configuration (Runtime)

Settings are managed in `nuxt.config.ts`:

```typescript
runtimeConfig: {
  sudoku: {
    apiUrl: 'https://sugoku.onrender.com/board',
    apiTimeout: 15000,
    validDifficulties: ['easy', 'medium', 'hard'],
  }
}
```

This allows configuration changes without code modification.

### Fallback Strategy

If the external API is unavailable:
- A hardcoded seed puzzle is returned
- The app remains functional in **offline scenarios**
- Error is logged for monitoring


## Error Handling

| Status | Reason | Fallback |
|--------|--------|----------|
| 400 | Invalid difficulty parameter | None - rejected |
| 504 | Request timeout (>15s) | Hardcoded puzzle |
| 502 | External API error | Hardcoded puzzle |
| 500 | Unexpected server error | Hardcoded puzzle |

## Testing

API configuration and behavior is tested in `server/api/sudoku.test.ts`.
