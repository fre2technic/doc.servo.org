initSidebarItems({"struct":[["Broadcast","A `Write` adaptor which will write data to multiple locations."],["BufReader","Wraps a `Read` and buffers input from it"],["BufStream","Wraps a Stream and buffers input and output to and from it."],["BufWriter","Wraps a Writer and buffers output to it"],["Bytes","A bridge from implementations of `Read` to an `Iterator` of `u8`."],["Chain","Adaptor to chain together two instances of `Read`."],["Chars","A bridge from implementations of `Read` to an `Iterator` of `char`."],["Cursor","A `Cursor` is a type which wraps another I/O object to provide a `Seek` implementation."],["Empty","A reader which is always at EOF."],["Error","The error type for I/O operations of the `Read`, `Write`, `Seek`, and associated traits."],["IntoInnerError","An error returned by `into_inner` which indicates whether a flush error happened or not."],["LineWriter","Wraps a Writer and buffers output to it, flushing whenever a newline (`0x0a`, `'\\n'`) is detected."],["Lines","An iterator over the lines of an instance of `BufRead` split on a newline byte."],["Repeat","A reader which infinitely yields one byte."],["Sink","A writer which will move data into the void."],["Split","An iterator over the contents of an instance of `BufRead` split on a particular byte."],["Stderr","A handle to the standard error stream of a process."],["StderrLock","A locked reference to the a `Stderr` handle."],["Stdin","A handle to the standard input stream of a process."],["StdinLock","A locked reference to the a `Stdin` handle."],["Stdout","A handle to the global standard output stream of the current process."],["StdoutLock","A locked reference to the a `Stdout` handle."],["Take","Reader adaptor which limits the bytes read from an underlying reader."],["Tee","An adaptor which will emit all read data to a specified writer as well."]],"fn":[["copy","Copies the entire contents of a reader into a writer."],["empty","Creates an instance of an empty reader."],["repeat","Creates an instance of a reader that infinitely repeats one byte."],["sink","Creates an instance of a writer which will successfully consume all data."],["stderr","Constructs a new reference to the standard error stream of a process."],["stdin","Create a new handle to the global standard input stream of this process."],["stdout","Constructs a new reference to the standard output of the current process."]],"trait":[["BufRead","A Buffer is a type of reader which has some form of internal buffering to allow certain kinds of reading operations to be more optimized than others."],["BufReadExt","Extension methods for all instances of `BufRead`, typically imported through `std::io::prelude::*`."],["Read","A trait for objects which are byte-oriented sources."],["ReadExt","Extension methods for all instances of `Read`, typically imported through `std::io::prelude::*`."],["Seek","An object implementing `Seek` internally has some form of cursor which can be moved within a stream of bytes."],["Write","A trait for objects which are byte-oriented sinks."],["WriteExt","Extension methods for all instances of `Write`, typically imported through `std::io::prelude::*`."]],"mod":[["prelude","The I/O Prelude"]],"type":[["Result","A type for results generated by I/O related functions where the `Err` type is hard-wired to `io::Error`."]],"enum":[["CharsError","An enumeration of possible errors that can be generated from the `Chars` adapter."],["ErrorKind","A list specifying general categories of I/O error."],["SeekFrom","Enumeration of possible methods to seek within an I/O object."]]});