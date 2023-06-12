# Next URL Shortener

> URL을 짧게 만들어주는 서비스

## Environment Variables

```bash
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT_ID=
NEXT_PUBLIC_APPWRITE_DATABASE_ID=
NEXT_PUBLIC_APPWRITE_SHORT_LINK_COLLECTION_ID=
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
