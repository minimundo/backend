const fileCategories = ['avatar', 'flag', 'media'] as const

type FileCategory = typeof fileCategories[number]

export { fileCategories, FileCategory }
