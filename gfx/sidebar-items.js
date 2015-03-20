initSidebarItems({"struct":[["PaintContext",""]],"mod":[["color",""],["display_list","Servo heavily uses display lists, which are retained-mode lists of painting commands to perform. Using a list instead of painting elements in immediate mode allows transforms, hit testing, and invalidation to be performed using the same primitives as painting. It also allows Servo to aggressively cull invisible and out-of-bounds painting elements, to reduce overdraw. Finally, display lists allow tiles to be farmed out onto multiple CPUs and painted in parallel (although this benefit does not apply to GPU-based painting)."],["font",""],["font_cache_task",""],["font_context",""],["font_template",""],["paint_task","The task that handles all painting."],["platform",""],["text",""]]});