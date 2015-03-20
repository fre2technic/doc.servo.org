initSidebarItems({"mod":[["Delimiter","`Delimiters` constants."]],"struct":[["CssStringWriter","A `TextWriter` adaptor that escapes text for writing as a double-quoted CSS string. Quotes are not included."],["DeclarationListParser","Provides an iterator for declaration list parsing."],["Delimiters","A set of characters, to be used with the `Parser::parse_until*` methods."],["NumericValue","The numeric value of `Number` and `Dimension` tokens."],["Parser","A CSS parser that borrows its `&str` input, yields `Token`s, and keeps track of nested blocks and functions."],["PercentageValue","The numeric value of `Percentage` tokens."],["RGBA","A color with red, green, blue, and alpha components."],["RuleListParser","Provides an iterator for rule list parsing."],["SourceLocation","The line and column number for a given position within the input."],["SourcePosition","A capture of the internal state of a `Parser` (including the position within the input), obtained from the `Parser::position` method."]],"enum":[["AtRuleType","The return value for `AtRuleParser::parse_prelude`. Indicates whether the at-rule is expected to have a `{ /* ... */ }` block or end with a `;` semicolon."],["Color","A <color> value."],["Token","One of the pieces the CSS input is broken into."]],"macro":[["match_ignore_ascii_case!","This macro is equivalent to a `match` expression on an `&str` value, but matching is case-insensitive in the ASCII range."]],"fn":[["decode_stylesheet_bytes","Determine the character encoding of a CSS stylesheet and decode it."],["parse_color_keyword","Return the named color with the given name."],["parse_important","Parse `!important`."],["parse_nth","Parse the *An+B* notation, as found in the `:nth-child()` selector. The input is typically the arguments of a function, in which case the caller needs to check if the arguments’ parser is exhausted. Return `Ok((A, B))`, or `Err(())` for a syntax error."],["parse_one_declaration","Parse a single declaration, such as an `( /* ... */ )` parenthesis in an `@supports` prelude."],["parse_one_rule","Parse a single rule, such as for CSSOM’s `CSSStyleSheet.insertRule`."],["serialize_identifier","Write a CSS identifier, escaping characters as necessary."],["serialize_string","Write a double-quoted CSS string token, escaping content as necessary."]],"trait":[["AtRuleParser","A trait to provide various parsing of at-rules."],["DeclarationParser","A trait to provide various parsing of declaration values."],["QualifiedRuleParser","A trait to provide various parsing of qualified rules."],["ToCss","Trait for things the can serialize themselves in CSS syntax."]]});