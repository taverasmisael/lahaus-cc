import classNames from 'classnames'

function NotificationBadge({ className }: { className?: string }) {
  return (
    <span
      data-testid="notification-badge"
      className={classNames(
        'rounded-full w-3 h-3 absolute top-0 right-0 bg-accent',
        className
      )}
    />
  )
}

export default NotificationBadge
