/// <reference path="fourslash.ts" />

// @filename: docstrings.py
//// class A: ...
////
//// class B:
////     """This is the class doc for B."""
////     def __init__(self):
////         """This is the __init__ doc for B."""
////
//// class C:
////     """This is the class doc for C."""
////     def __init__(self):
////         pass
////
//// class D:
////     def __init__(self):
////         """This is the __init__ doc for D."""
////         pass
////
//// [|/*global*/|]
//// object().[|/*object*/|]
//// A().[|/*a*/|]
//// B().[|/*b*/|]
//// C().[|/*c*/|]
//// D().[|/*d*/|]

// @filename: typeshed-fallback/stdlib/builtins.py
//// class object():
////     """This is the class doc for object."""
////     def __init__(self):
////         """This is the __init__ doc for object."""
////         pass
////
////     def __dir__(self):
////         """This is the __dir__ doc for object."""
////         pass

{
    // @ts-ignore
    await helper.verifyCompletion('included', 'plaintext', {
        global: {
            completions: [
                {
                    label: 'object',
                    kind: Consts.CompletionItemKind.Class,
                    documentation: 'This is the class doc for object.',
                },
                {
                    label: 'A',
                    kind: Consts.CompletionItemKind.Class,
                    documentation: undefined,
                },
                {
                    label: 'B',
                    kind: Consts.CompletionItemKind.Class,
                    documentation: 'This is the class doc for B.',
                },
                {
                    label: 'C',
                    kind: Consts.CompletionItemKind.Class,
                    documentation: 'This is the class doc for C.',
                },
                {
                    label: 'D',
                    kind: Consts.CompletionItemKind.Class,
                    documentation: undefined,
                },
            ],
        },
        object: {
            completions: [
                {
                    label: '__init__',
                    kind: Consts.CompletionItemKind.Method,
                    documentation: 'builtins.object.__init__()\n\nThis is the __init__ doc for object.',
                },
            ],
        },
        a: {
            completions: [
                {
                    label: '__init__',
                    kind: Consts.CompletionItemKind.Method,
                    documentation: 'builtins.object.__init__()',
                },
            ],
        },
        b: {
            completions: [
                {
                    label: '__init__',
                    kind: Consts.CompletionItemKind.Method,
                    documentation: 'docstrings.B.__init__()\n\nThis is the __init__ doc for B.',
                },
            ],
        },
        c: {
            completions: [
                {
                    label: '__init__',
                    kind: Consts.CompletionItemKind.Method,
                    documentation: 'docstrings.C.__init__()',
                },
            ],
        },
        d: {
            completions: [
                {
                    label: '__init__',
                    kind: Consts.CompletionItemKind.Method,
                    documentation: 'docstrings.D.__init__()\n\nThis is the __init__ doc for D.',
                },
            ],
        },
    });
}
