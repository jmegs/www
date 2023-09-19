import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Bio = defineDocumentType(() => ({
  name: 'Bio',
  filePathPattern: `bio/**/*.mdx`,
  contentType: 'mdx',
  fields: {}
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [ Bio ],
  date: { timezone: "America/New_York" }
})