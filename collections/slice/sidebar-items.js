initSidebarItems({"trait":[["AsSlice","Data that is viewable as a slice."],["IntSliceExt","Extension methods for slices containing integers."],["SliceConcatExt","An extension trait for concatenating slices"],["SliceExt","Allocating extension methods for slices."]],"struct":[["Chunks","An iterator over a slice in (non-overlapping) chunks (`size` elements at a time)."],["ChunksMut","An iterator over a slice in (non-overlapping) mutable chunks (`size` elements at a time). When the slice len is not evenly divided by the chunk size, the last slice of the iteration will be the remainder."],["ElementSwaps","An iterator that yields the element swaps needed to produce a sequence of all possible permutations for an indexed sequence of elements. Each permutation is only a single swap apart."],["Iter","Immutable slice iterator"],["IterMut","Mutable slice iterator."],["Permutations","An iterator that uses `ElementSwaps` to iterate through all possible permutations of a vector."],["RSplitN","An iterator over subslices separated by elements that match a predicate function, limited to a given number of splits, starting from the end of the slice."],["RSplitNMut","An iterator over subslices separated by elements that match a predicate function, limited to a given number of splits, starting from the end of the slice."],["Split","An iterator over subslices separated by elements that match a predicate function."],["SplitMut","An iterator over the subslices of the vector which are separated by elements that match `pred`."],["SplitN","An iterator over subslices separated by elements that match a predicate function, limited to a given number of splits."],["SplitNMut","An iterator over subslices separated by elements that match a predicate function, limited to a given number of splits."],["Windows","An iterator over overlapping subslices of length `size`."]],"mod":[["bytes","Operations on `[u8]`."]],"fn":[["from_raw_buf","Forms a slice from a pointer and a length."],["from_raw_mut_buf","Performs the same functionality as `from_raw_buf`, except that a mutable slice is returned."],["from_raw_parts","Forms a slice from a pointer and a length."],["from_raw_parts_mut","Performs the same functionality as `from_raw_parts`, except that a mutable slice is returned."],["mut_ref_slice","Converts a pointer to A into a slice of length 1 (without copying)."],["ref_slice","Converts a pointer to A into a slice of length 1 (without copying)."]]});