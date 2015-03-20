initSidebarItems({"trait":[["TypeFoldable","The TypeFoldable trait is implemented for every type that can be folded. Basically, every type that has a corresponding method in TypeFolder."],["TypeFolder","The TypeFolder trait defines the actual *folding*. There is a method defined for every foldable type. Each of these has a default implementation that does an \"identity\" fold. Within each identity fold, it should invoke `foo.fold_with(self)` to fold each sub-item."]],"struct":[["BottomUpFolder",""],["RegionEraser",""],["RegionFolder","Folds over the substructure of a type, visiting its component types and all regions that occur *free* within it."]],"fn":[["collect_regions",""],["erase_regions",""],["fold_regions",""],["shift_region",""],["shift_regions",""],["super_fold_autoref",""],["super_fold_bare_fn_ty",""],["super_fold_binder",""],["super_fold_closure_ty",""],["super_fold_existential_bounds",""],["super_fold_fn_sig",""],["super_fold_item_substs",""],["super_fold_mt",""],["super_fold_output",""],["super_fold_substs",""],["super_fold_trait_ref",""],["super_fold_ty",""]]});