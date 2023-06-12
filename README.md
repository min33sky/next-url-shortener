# Next URL Shortener

## Environment Variables

```bash
BASE_URL=
APPWRITE_ENDPOINT=
APPWRITE_PROJECT_ID=
APPWRITE_DATABASE_ID=
APPWRITE_SHORT_LINK_COLLECTION_ID=
```

## Note

1. Appwrite의 Collection Setting에서 Permissions 설정을 꼭 해야한다. (안하면 인증 에러남)

2. DarkMode 설정 시 hydration Error를 막기위해 `layout.tsx`에 다음과 같이 설정한다.

```tsx
<html
  lang="ko"
  className="light"
  style={{
    colorScheme: 'light',
  }}
>
  // .......
</html>
```
