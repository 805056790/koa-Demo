export function api(ctx,status, data, message) {
  return {
    status,
    data,
    message
  }
}