import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Bio = defineDocumentType(() => ({
  name: 'Bio',
  filePathPattern: `bio/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    slug: {
      type: "string",
      description: "The identifyer or URL segment of the content",
      required: true,
    },
  }
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [ Bio ],
  date: { timezone: "America/New_York" }
})