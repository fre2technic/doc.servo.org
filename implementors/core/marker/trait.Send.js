(function() {var implementors = {};
implementors['collections'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='alloc/arc/struct.Weak.html' title='alloc::arc::Weak'>Weak</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='alloc/arc/struct.ArcInner.html' title='alloc::arc::ArcInner'>ArcInner</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='alloc/rc/struct.Weak.html' title='alloc::rc::Weak'>Weak</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='collections/vec/struct.IntoIter.html' title='collections::vec::IntoIter'>IntoIter</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T: <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='collections/vec/struct.Drain.html' title='collections::vec::Drain'>Drain</a>&lt;'a, T&gt;",];implementors['test'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='test/struct.TestDesc.html' title='test::TestDesc'>TestDesc</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='enum' href='test/enum.TestResult.html' title='test::TestResult'>TestResult</a>",];implementors['core'] = [];implementors['alloc'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> + <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> + <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='alloc/arc/struct.Weak.html' title='alloc::arc::Weak'>Weak</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='alloc/rc/struct.Weak.html' title='alloc::rc::Weak'>Weak</a>&lt;T&gt;",];implementors['rustc_trans'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='rustc_trans/trans/struct.ModuleTranslation.html' title='rustc_trans::trans::ModuleTranslation'>ModuleTranslation</a>",];implementors['html5ever'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='enum' href='html5ever/tokenizer/enum.Token.html' title='html5ever::tokenizer::Token'>Token</a>",];implementors['hyper'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;W&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='hyper/client/request/struct.Request.html' title='hyper::client::request::Request'>Request</a>&lt;W&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;S: <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='hyper/client/response/struct.Response.html' title='hyper::client::response::Response'>Response</a>&lt;S&gt;",];implementors['layers'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='layers/platform/linux/surface/struct.NativeGraphicsMetadata.html' title='layers::platform::linux::surface::NativeGraphicsMetadata'>NativeGraphicsMetadata</a>",];implementors['style'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='util/deque/struct.Deque.html' title='util::deque::Deque'>Deque</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='util/deque/struct.Buffer.html' title='util::deque::Buffer'>Buffer</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;QueueData, WorkData&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='enum' href='util/workqueue/enum.WorkerMsg.html' title='util::workqueue::WorkerMsg'>WorkerMsg</a>&lt;QueueData, WorkData&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;QueueData, WorkData&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='enum' href='util/workqueue/enum.SupervisorMsg.html' title='util::workqueue::SupervisorMsg'>SupervisorMsg</a>&lt;QueueData, WorkData&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;QueueData, WorkData&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='util/workqueue/struct.WorkerThread.html' title='util::workqueue::WorkerThread'>WorkerThread</a>&lt;QueueData, WorkData&gt;",];implementors['script_traits'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='script_traits/struct.UntrustedNodeAddress.html' title='script_traits::UntrustedNodeAddress'>UntrustedNodeAddress</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='enum' href='script_traits/enum.ConstellationControlMsg.html' title='script_traits::ConstellationControlMsg'>ConstellationControlMsg</a>",];implementors['gfx'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='enum' href='gfx/font_cache_task/enum.Command.html' title='gfx::font_cache_task::Command'>Command</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='enum' href='gfx/font_cache_task/enum.Reply.html' title='gfx::font_cache_task::Reply'>Reply</a>",];implementors['script'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='script/dom/bindings/refcounted/struct.TrustedReference.html' title='script::dom::bindings::refcounted::TrustedReference'>TrustedReference</a>","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='script/dom/bindings/utils/trait.Reflectable.html' title='script::dom::bindings::utils::Reflectable'>Reflectable</a>&gt; <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='script/dom/bindings/refcounted/struct.Trusted.html' title='script::dom::bindings::refcounted::Trusted'>Trusted</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='script/dom/bindings/structuredclone/struct.StructuredCloneData.html' title='script::dom::bindings::structuredclone::StructuredCloneData'>StructuredCloneData</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='script/dom/node/struct.LayoutData.html' title='script::dom::node::LayoutData'>LayoutData</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='script/dom/node/struct.TrustedNodeAddress.html' title='script::dom::node::TrustedNodeAddress'>TrustedNodeAddress</a>",];implementors['layout'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='layout/context/struct.SharedLayoutContextWrapper.html' title='layout::context::SharedLayoutContextWrapper'>SharedLayoutContextWrapper</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='layout/flow/struct.BaseFlow.html' title='layout::flow::BaseFlow'>BaseFlow</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='layout/flow_ref/struct.FlowRef.html' title='layout::flow_ref::FlowRef'>FlowRef</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='layout/flow_ref/struct.WeakFlowRef.html' title='layout::flow_ref::WeakFlowRef'>WeakFlowRef</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='layout/fragment/struct.Fragment.html' title='layout::fragment::Fragment'>Fragment</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
