import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name:g.string().length({min:3}),
  email:g.string().unique(),
  avatarUrl:g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional()
})

const Project = g.model('Project', {
  title:g.string().length({min:3}),
  description:g.string(),
  image:g.url(),
  githubUrl: g.url().optional(),
  liveSiteUrl: g.url().optional(),
  cateogary: g.string().search(),
  createdBy: g.relation(() => User)
})

export default config({
  schema:g
})








// Welcome to Grafbase!
// Define your data models, integrate auth, permission rules, custom resolvers, search, and more with Grafbase.
// Integrate Auth
// https://grafbase.com/docs/auth
//
// const authProvider = auth.OpenIDConnect({
//   issuer: process.env.ISSUER_URL ?? ''
// })
//
// Define Data Models
// https://grafbase.com/docs/database





// export default config({
//   schema: g
//   // Integrate Auth
//   // https://grafbase.com/docs/auth
//   // auth: {
//   //   providers: [authProvider],
//   //   rules: (rules) => {
//   //     rules.private()
//   //   }
//   // }
// })
