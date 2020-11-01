export default async function (context) {
  const listOfAvailableSlugs = await context.$content('posts')
    .only(['slug'])
    .fetch()
  const mappedAvailableSlugs = listOfAvailableSlugs.map(post => post.slug)
  const checkIfCurrentPostExists = mappedAvailableSlugs.indexOf(context.params.slug)
  if (checkIfCurrentPostExists < 0) {
    return context.redirect('/blog/postNotFound')
  }
}
