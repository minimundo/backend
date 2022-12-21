const fileCategories = ['avatar', 'flag', 'question'] as const

type FileCategory = typeof fileCategories[number]

export { fileCategories, FileCategory }
