/// <reference path="fourslash.ts" />

// @filename: simple.py
////
//// def simple(x: int, y: int) -> int: ...
////
//// simple([|/*s1*/|])[|/*sOutside*/|]
////
//// simple(1, [|/*s2*/|])
////
//// simple( [|/*s3*/|]   1  [|/*s4*/|]  , [|/*s5*/|] 2     [|/*s6*/|]
////   [|/*s7*/|]  )
////
//// x = 1234[|/*sNoCall*/|]
////
//// 'string([|/*sNoCallInString*/|]'.capitalize()
////
//// f'format string([|/*sNoCallInFormatString*/|]'.capitalize()
////
//// f'format string {int.as_integer_ratio([|/*s8*/|])} '.capitalize()
////
//// def foo(f:str): ...
////
//// def bar(b:str): ...
////
//// bar([|/*nestedString1*/|]foo([|/*nestedString2*/|]))
{
    const simpleSignatures = [
        {
            label: 'simple.simple(x, y)',
            parameters: ['x', 'y'],
        },
    ];

    helper.verifySignature('plaintext', {
        s1: {
            signatures: simpleSignatures,
            activeParameters: [0],
        },
        s2: {
            signatures: simpleSignatures,
            activeParameters: [1],
        },
        s3: {
            signatures: simpleSignatures,
            activeParameters: [0],
        },
        s4: {
            signatures: simpleSignatures,
            activeParameters: [0],
        },
        s5: {
            signatures: simpleSignatures,
            activeParameters: [1],
        },
        s6: {
            signatures: simpleSignatures,
            activeParameters: [1],
        },
        s7: {
            signatures: simpleSignatures,
            activeParameters: [1],
        },
        sOutside: {
            noSig: true,
        },
        sNoCall: {
            noSig: true,
        },
        sNoCallInString: {
            noSig: true,
        },
        sNoCallInFormatString: {
            noSig: true,
        },
        s8: {
            signatures: [
                {
                    label: 'builtins.int.as_integer_ratio()',
                    parameters: [],
                },
            ],
            activeParameters: [undefined],
        },
        nestedString1: {
            signatures: [
                {
                    label: 'simple.bar(b)',
                    parameters: ['b'],
                },
            ],
            activeParameters: [0],
        },
        nestedString2: {
            signatures: [
                {
                    label: 'simple.foo(f)',
                    parameters: ['f'],
                },
            ],
            activeParameters: [0],
        },
    });
}
