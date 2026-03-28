import React, { useState } from 'react'
import {
  Stack,
  Text,
  TextInput,
  Button,
  Link,
  FormControl,
} from '@primer/react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Stack
      justify="center"
      align="center"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bgColor-default)',
      }}
    >
      <Stack
        as="form"
        direction="vertical"
        gap="normal"
        padding="normal"
        style={{
          width: '100%',
          maxWidth: 340,
          backgroundColor: 'var(--bgColor-muted)',
          border: '1px solid var(--borderColor-default)',
          borderRadius: 'var(--borderRadius-medium)',
        }}
        onSubmit={(e: React.FormEvent) => e.preventDefault()}
      >
        {/* Logo placeholder */}
        <Stack justify="center" align="center">
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              backgroundColor: 'var(--bgColor-accent-muted)',
              border: '1px solid var(--borderColor-accent-muted)',
            }}
          />
        </Stack>

        <Stack justify="center" align="center">
          <Text as="h2" style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>
            Sign in
          </Text>
        </Stack>

        <FormControl>
          <FormControl.Label>Email address</FormControl.Label>
          <TextInput
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            block
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <TextInput
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            block
          />
        </FormControl>

        <Button variant="primary" size="large" block type="submit">
          Sign in
        </Button>

        <Stack justify="center" align="center">
          <Text>
            <Link href="#">Forgot password?</Link>
          </Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
