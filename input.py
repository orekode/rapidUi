def longestCommonPrefix( strs: list[str]) -> str:

    prefix = ""

    def find_prefix_in_two_words(word1, word2):
        
        if word1 == '' or word2 == '':
            return ''

        size = len(word1) if len(word2) > len(word1) else len(word2)
        prefix = ""

        for j in range(size):
            check = word1[0:(j + 1)]
            if(check in word2[0:len(check)]):
                prefix = check
            else:
                break

        return prefix

    for i in range(len(strs) - 1):
        current = strs[i]
        next = strs[ i + 1 ]

        if(i == 0):
            prefix = find_prefix_in_two_words(current, next)
        else:
            prefix = find_prefix_in_two_words(prefix, next)

        print(current, next, prefix)

    return prefix

print(longestCommonPrefix(["c", "acc", "ccc"]))