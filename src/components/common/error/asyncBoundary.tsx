import { ReactNode, ReactElement, Suspense } from 'react'
import ErrorBoundary from 'src/components/common/error/errorBoundary'

import { QueryErrorResetBoundary } from '@tanstack/react-query'

interface Props {
  pendingFallback: ReactElement
  rejectedFallback: ({ error, reset }: { error: Error; reset: () => void }) => ReactElement
  children: ReactNode
}

const AsyncBoundary = ({ pendingFallback, rejectedFallback, children }: Props) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackComponent={rejectedFallback}>
          <Suspense fallback={pendingFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default AsyncBoundary
