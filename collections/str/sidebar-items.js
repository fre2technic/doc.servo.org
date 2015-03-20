initSidebarItems({"trait":[["CharEq","Something that can be used to compare against a character"],["DoubleEndedSearcher","A marker trait to express that a `ReverseSearcher` can be used for a `DoubleEndedIterator` implementation."],["FromStr","A trait to abstract the idea of creating a new instance of a type from a string."],["Pattern","A string pattern."],["ReverseSearcher","A reverse searcher for a string pattern."],["Searcher","A searcher for a string pattern."],["Str","Any string that can be represented as a slice"],["StrExt","Any string that can be represented as a slice."]],"enum":[["SearchStep","Result of calling `Searcher::next()` or `ReverseSearcher::next_back()`."],["Utf8Error","Errors which can occur when attempting to interpret a byte slice as a `str`."]],"fn":[["from_c_str","Constructs a static string slice from a given raw pointer."],["from_utf8","Converts a slice of bytes to a string slice without performing any allocations."],["from_utf8_unchecked","Converts a slice of bytes to a string slice without checking that the string contains valid UTF-8."]],"struct":[["Bytes","External iterator for a string's bytes. Use with the `std::iter` module."],["CharIndices","External iterator for a string's characters and their byte offsets. Use with the `std::iter` module."],["CharRange","Struct that contains a `char` and the index of the first byte of the next `char` in a string.  This can be used as a data structure for iterating over the UTF-8 bytes of a string."],["Chars","Iterator for the char (representing *Unicode Scalar Values*) of a string"],["Decompositions","External iterator for a string decomposition's characters."],["GraphemeIndices","External iterator for grapheme clusters and byte offsets."],["Graphemes","External iterator for a string's [grapheme clusters](http://www.unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)."],["Lines","An iterator over the lines of a string, separated by `\\n`."],["LinesAny","An iterator over the lines of a string, separated by either `\\n` or (`\\r\\n`)."],["MatchIndices","An iterator over the start and end indices of the matches of a substring within a larger string"],["ParseBoolError","An error returned when parsing a `bool` from a string fails."],["RSplitN","Return type of `StrExt::rsplitn`"],["Recompositions","External iterator for a string recomposition's characters."],["Split","Return type of `StrExt::split`"],["SplitN","Return type of `StrExt::splitn`"],["SplitStr","An iterator over the substrings of a string separated by a given search string"],["SplitTerminator","Return type of `StrExt::split_terminator`"],["Utf16Units","External iterator for a string's UTF16 codeunits."],["Words","An iterator over the words of a string, separated by a sequence of whitespace"]]});