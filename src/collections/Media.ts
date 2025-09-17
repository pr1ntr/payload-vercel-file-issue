import path from 'path'
import type { CollectionConfig } from 'payload'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'mimeType', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'alt',
      label: 'Alt text',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    disableLocalStorage: true,
    adminThumbnail: 'mobile',
    focalPoint: true,
    mimeTypes: ['image/*', 'video/*', 'application/pdf', 'application/zip'],
    imageSizes: [
      {
        name: 'mobile',
        width: 750,
      },
      {
        name: 'desktop',
        width: 1920,
        withoutEnlargement: true,
      },
    ],
  },
}
