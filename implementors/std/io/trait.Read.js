(function() {var implementors = {};
implementors['std'] = [];implementors['openssl'] = ["<a class='stability Unstable' title='Unstable: this new I/O module is still under active development and APIs are subject to tweaks fairly regularly'></a>impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='openssl/bio/struct.MemBio.html' title='openssl::bio::MemBio'>MemBio</a>","<a class='stability Unstable' title='Unstable: this new I/O module is still under active development and APIs are subject to tweaks fairly regularly'></a>impl&lt;S: <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='openssl/ssl/struct.SslStream.html' title='openssl::ssl::SslStream'>SslStream</a>&lt;S&gt;","<a class='stability Unstable' title='Unstable: this new I/O module is still under active development and APIs are subject to tweaks fairly regularly'></a>impl&lt;S&gt; <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='enum' href='openssl/ssl/enum.MaybeSslStream.html' title='openssl::ssl::MaybeSslStream'>MaybeSslStream</a>&lt;S&gt;",];implementors['hyper'] = ["<a class='stability Unstable' title='Unstable: this new I/O module is still under active development and APIs are subject to tweaks fairly regularly'></a>impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='hyper/client/response/struct.Response.html' title='hyper::client::response::Response'>Response</a>","<a class='stability Unstable' title='Unstable: this new I/O module is still under active development and APIs are subject to tweaks fairly regularly'></a>impl&lt;'a&gt; <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='enum' href='hyper/client/enum.Body.html' title='hyper::client::Body'>Body</a>&lt;'a&gt;","<a class='stability Unstable' title='Unstable: this new I/O module is still under active development and APIs are subject to tweaks fairly regularly'></a>impl&lt;R: <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a>&gt; <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='enum' href='hyper/http/enum.HttpReader.html' title='hyper::http::HttpReader'>HttpReader</a>&lt;R&gt;","<a class='stability Unstable' title='Unstable: this new I/O module is still under active development and APIs are subject to tweaks fairly regularly'></a>impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='enum' href='hyper/net/enum.HttpStream.html' title='hyper::net::HttpStream'>HttpStream</a>","<a class='stability Unstable' title='Unstable: this new I/O module is still under active development and APIs are subject to tweaks fairly regularly'></a>impl&lt;'a&gt; <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='hyper/server/request/struct.Request.html' title='hyper::server::request::Request'>Request</a>&lt;'a&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
