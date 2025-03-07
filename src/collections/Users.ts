import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'breaks-on-update',
      type: 'text',
      required: true,
      access: { update: () => false },
    },
    {
      name: 'dataloss-on-update',
      type: 'text',
      hooks: { beforeChange: [({ value }) => value ?? ''] },
      access: { update: () => false },
    },
  ],
}
