export default function ({ route, redirect }) {
  if (route.params.name !== 'nintendo' && route.params.name !== 'xbox') {
    return redirect('/antagonists/antagonistNotFound')
  }
}
