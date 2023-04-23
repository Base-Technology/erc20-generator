(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e){e.exports={_format:"hh-sol-artifact-1",contractName:"StandardERC20Token",sourceName:"contracts/StandardERC20Token.sol",abi:[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"account",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"name",type:"string"},{name:"symbol",type:"string"},{name:"decimals",type:"uint8"},{name:"initialHolder",type:"address"},{name:"amount",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"}],bytecode:"0x60806040523480156200001157600080fd5b5060405162000f0938038062000f09833981018060405260a08110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b505092919060200180516401000000008111156200009c57600080fd5b82016020810184811115620000b057600080fd5b8151640100000000811182820187101715620000cb57600080fd5b50506020808301516040840151606090940151875193965090945091869186918691620000fe91600391860190620002e9565b50815162000114906004906020850190620002e9565b506005805460ff191660ff929092169190911790555062000141905082826401000000006200014c810204565b50505050506200038e565b600160a060020a0382161515620001c457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b600254620001e1908264010000000062000adb6200026d82021704565b600255600160a060020a03821660009081526020819052604090205462000217908264010000000062000adb6200026d82021704565b600160a060020a0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600082820183811015620002e257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200032c57805160ff19168380011785556200035c565b828001600101855582156200035c579182015b828111156200035c5782518255916020019190600101906200033f565b506200036a9291506200036e565b5090565b6200038b91905b808211156200036a576000815560010162000375565b90565b610b6b806200039e6000396000f3fe6080604052600436106100ae5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100b3578063095ea7b31461013d57806318160ddd1461018a57806323b872dd146101b1578063313ce567146101f4578063395093511461021f57806370a082311461025857806395d89b411461028b578063a457c2d7146102a0578063a9059cbb146102d9578063dd62ed3e14610312575b600080fd5b3480156100bf57600080fd5b506100c861034d565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101025781810151838201526020016100ea565b50505050905090810190601f16801561012f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014957600080fd5b506101766004803603604081101561016057600080fd5b50600160a060020a0381351690602001356103e3565b604080519115158252519081900360200190f35b34801561019657600080fd5b5061019f610400565b60408051918252519081900360200190f35b3480156101bd57600080fd5b50610176600480360360608110156101d457600080fd5b50600160a060020a03813581169160208101359091169060400135610406565b34801561020057600080fd5b506102096104e5565b6040805160ff9092168252519081900360200190f35b34801561022b57600080fd5b506101766004803603604081101561024257600080fd5b50600160a060020a0381351690602001356104ee565b34801561026457600080fd5b5061019f6004803603602081101561027b57600080fd5b5035600160a060020a0316610542565b34801561029757600080fd5b506100c861055d565b3480156102ac57600080fd5b50610176600480360360408110156102c357600080fd5b50600160a060020a0381351690602001356105be565b3480156102e557600080fd5b50610176600480360360408110156102fc57600080fd5b50600160a060020a038135169060200135610670565b34801561031e57600080fd5b5061019f6004803603604081101561033557600080fd5b50600160a060020a0381358116916020013516610684565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103d95780601f106103ae576101008083540402835291602001916103d9565b820191906000526020600020905b8154815290600101906020018083116103bc57829003601f168201915b5050505050905090565b60006103f76103f06106af565b84846106b3565b50600192915050565b60025490565b6000610413848484610820565b6104db8461041f6106af565b6104d685606060405190810160405280602881526020017f45524332303a207472616e7366657220616d6f756e742065786365656473206181526020017f6c6c6f77616e6365000000000000000000000000000000000000000000000000815250600160008b600160a060020a0316600160a060020a0316815260200190815260200160002060006104af6106af565b600160a060020a03168152602081019190915260400160002054919063ffffffff610a4116565b6106b3565b5060019392505050565b60055460ff1690565b60006103f76104fb6106af565b846104d6856001600061050c6106af565b600160a060020a03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610adb16565b600160a060020a031660009081526020819052604090205490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103d95780601f106103ae576101008083540402835291602001916103d9565b60006103f76105cb6106af565b846104d685606060405190810160405280602581526020017f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7781526020017f207a65726f000000000000000000000000000000000000000000000000000000815250600160006106396106af565b600160a060020a03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610a4116565b60006103f761067d6106af565b8484610820565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b3390565b600160a060020a0383161515610738576040805160e560020a62461bcd028152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03821615156107be576040805160e560020a62461bcd02815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600160a060020a03831615156108a6576040805160e560020a62461bcd02815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a038216151561092c576040805160e560020a62461bcd02815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60408051606081018252602681527f45524332303a207472616e7366657220616d6f756e74206578636565647320626020808301919091527f616c616e6365000000000000000000000000000000000000000000000000000082840152600160a060020a03861660009081529081905291909120546109b291839063ffffffff610a4116565b600160a060020a0380851660009081526020819052604080822093909355908416815220546109e7908263ffffffff610adb16565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610ad35760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a98578181015183820152602001610a80565b50505050905090810190601f168015610ac55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610b38576040805160e560020a62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fea165627a7a72305820472890fd121c025a37b501710ae3a3700f95c433ccc8d59fc6da600f14defa450029",deployedBytecode:"0x6080604052600436106100ae5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100b3578063095ea7b31461013d57806318160ddd1461018a57806323b872dd146101b1578063313ce567146101f4578063395093511461021f57806370a082311461025857806395d89b411461028b578063a457c2d7146102a0578063a9059cbb146102d9578063dd62ed3e14610312575b600080fd5b3480156100bf57600080fd5b506100c861034d565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101025781810151838201526020016100ea565b50505050905090810190601f16801561012f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014957600080fd5b506101766004803603604081101561016057600080fd5b50600160a060020a0381351690602001356103e3565b604080519115158252519081900360200190f35b34801561019657600080fd5b5061019f610400565b60408051918252519081900360200190f35b3480156101bd57600080fd5b50610176600480360360608110156101d457600080fd5b50600160a060020a03813581169160208101359091169060400135610406565b34801561020057600080fd5b506102096104e5565b6040805160ff9092168252519081900360200190f35b34801561022b57600080fd5b506101766004803603604081101561024257600080fd5b50600160a060020a0381351690602001356104ee565b34801561026457600080fd5b5061019f6004803603602081101561027b57600080fd5b5035600160a060020a0316610542565b34801561029757600080fd5b506100c861055d565b3480156102ac57600080fd5b50610176600480360360408110156102c357600080fd5b50600160a060020a0381351690602001356105be565b3480156102e557600080fd5b50610176600480360360408110156102fc57600080fd5b50600160a060020a038135169060200135610670565b34801561031e57600080fd5b5061019f6004803603604081101561033557600080fd5b50600160a060020a0381358116916020013516610684565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103d95780601f106103ae576101008083540402835291602001916103d9565b820191906000526020600020905b8154815290600101906020018083116103bc57829003601f168201915b5050505050905090565b60006103f76103f06106af565b84846106b3565b50600192915050565b60025490565b6000610413848484610820565b6104db8461041f6106af565b6104d685606060405190810160405280602881526020017f45524332303a207472616e7366657220616d6f756e742065786365656473206181526020017f6c6c6f77616e6365000000000000000000000000000000000000000000000000815250600160008b600160a060020a0316600160a060020a0316815260200190815260200160002060006104af6106af565b600160a060020a03168152602081019190915260400160002054919063ffffffff610a4116565b6106b3565b5060019392505050565b60055460ff1690565b60006103f76104fb6106af565b846104d6856001600061050c6106af565b600160a060020a03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610adb16565b600160a060020a031660009081526020819052604090205490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103d95780601f106103ae576101008083540402835291602001916103d9565b60006103f76105cb6106af565b846104d685606060405190810160405280602581526020017f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7781526020017f207a65726f000000000000000000000000000000000000000000000000000000815250600160006106396106af565b600160a060020a03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610a4116565b60006103f761067d6106af565b8484610820565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b3390565b600160a060020a0383161515610738576040805160e560020a62461bcd028152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03821615156107be576040805160e560020a62461bcd02815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600160a060020a03831615156108a6576040805160e560020a62461bcd02815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a038216151561092c576040805160e560020a62461bcd02815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60408051606081018252602681527f45524332303a207472616e7366657220616d6f756e74206578636565647320626020808301919091527f616c616e6365000000000000000000000000000000000000000000000000000082840152600160a060020a03861660009081529081905291909120546109b291839063ffffffff610a4116565b600160a060020a0380851660009081526020819052604080822093909355908416815220546109e7908263ffffffff610adb16565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610ad35760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a98578181015183820152602001610a80565b50505050905090810190601f168015610ac55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610b38576040805160e560020a62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fea165627a7a72305820472890fd121c025a37b501710ae3a3700f95c433ccc8d59fc6da600f14defa450029",linkReferences:{},deployedLinkReferences:{}}},40:function(e,t,a){e.exports=a(80)},45:function(e,t,a){},46:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n,r,o,i=a(0),c=a.n(i),f=a(28),l=a.n(f),d=(a(45),a(21)),s=a(4),b=a(5),u=(a(46),a(9)),m=a.n(u),p=a(22),h=(a(48),a(16)),y=a(6),v=y.a.div(n||(n=Object(b.a)(['\n  text-align: left;\n\n  ul {\n    list-style-type: none;\n    margin: 0rem;\n  }\n\n  ul > li:before {\n    content: "\u2705 ";\n    margin-left: -1.5rem;\n  }\n']))),g=function(){return c.a.createElement(v,null,c.a.createElement("ul",null,c.a.createElement("li",null,"Fill the information bellow"),c.a.createElement("li",null,'Press "Create Token!" and pay for the gas'),c.a.createElement("li",null,"Wait for the contract to be created on the blockchain"),c.a.createElement("li",null,"Profit!"," ",c.a.createElement("span",{role:"img","aria-label":"unicorn"},"\ud83e\udd84"))))},E=a(18),w=a(34),x=a.n(w),k=a(8),O=a(36),S=a(15);k.b.add(S.a),k.b.add(S.b);var L,j,T,A,N=y.a.div(r||(r=Object(b.a)(["\n  border: 3px solid #ececec;\n  border-radius: 8px;\n  text-align: left;\n  margin: 1rem;\n  padding: 1rem;\n"]))),I=y.a.button(o||(o=Object(b.a)(['\n  font-family: "Lucida Console", Monaco, monospace;\n  font-weight: bold;\n  font-size: 1rem;\n  margin: 1rem;\n']))),R=function(e){var t=e.values,a=e.errors,n=e.touched,r=e.fieldName,o=e.label,i=e.placeholder,f=e.helpText,l=e.maxLength,d=e.disabled,s=e.optionalButton,b=e.optionalExtraControl;return c.a.createElement("div",{className:"form-group ".concat(a[r]&&n[r]?"text-danger":null)},c.a.createElement("label",{htmlFor:r},o),c.a.createElement("div",{className:"input-group"},c.a.createElement(E.a,{className:"form-control ".concat(a[r]&&n[r]?"is-invalid":null),type:"text",name:r,id:r,placeholder:i,maxLength:l,disabled:d,value:t[r],required:!0}),s,a[r]&&n[r]&&c.a.createElement("div",{className:"invalid-feedback"},a[r])),b,c.a.createElement("small",{className:"form-text text-muted"},f))},C=function(e){var t=e.onSubmit,a=e.disabled,n=e.initialOwner,r=function(e){var t=Object(i.useState)(e),a=Object(s.a)(t,2),n=a[0],r=a[1];return[n,function(){r(!n)},r]}(!1),o=Object(s.a)(r,3),f=o[0],l=o[1],d=o[2],b=function(e){return function(t){m.a.utils.isAddress(t)&&(e("initialOwner",t),d(!1))}},u=function(e){console.log("Error while scanning address: "+e),d(!1)};return c.a.createElement(N,null,c.a.createElement(E.c,{initialValues:{tokenName:"",tokenSymbol:"",initialAmount:0,initialOwner:n},validate:function(e){var t={};if(e.tokenName&&""!==e.tokenName.trim()?/^[a-zA-Z0-9 ]{1,20}$/.test(e.tokenName.trim())||(t.tokenName="Token name must contain between 1 and 20 letters, numbers or spaces"):t.tokenName="Token name is required",e.tokenSymbol&&""!==e.tokenSymbol.trim()?/^[a-zA-Z]{2,10}$/.test(e.tokenSymbol.trim())||(t.tokenSymbol="Token symbol must contain between 2 and 10 letters"):t.tokenSymbol="Token symbol is required",e.initialAmount)if(/^[0-9]{1,13}$/.test(e.initialAmount)){var a=parseInt(e.initialAmount);(a<1||a>1e12)&&(t.initialAmount="Amount must be an integer number between 1 and 1000 bi")}else t.initialAmount="Amount must be an integer number between 1 and 1000 bi";else t.initialAmount="Initial amount is required";return e.initialOwner?m.a.utils.isAddress(e.initialOwner)||(t.initialOwner="Enter a valid ETH address"):t.initialOwner="Initial owner is required",t},onSubmit:function(e,a){var n=a.setSubmitting;t(e),n(!1)},render:function(e){var t=e.values,n=e.errors,r=e.touched,o=e.setFieldValue;return c.a.createElement(E.b,{className:"needs-validation",noValidate:!0},c.a.createElement(R,{values:t,errors:n,touched:r,fieldName:"tokenName",label:"Token name",placeholder:"Enter token name",helpText:"E.g. TestCoin",maxLength:20,disabled:a}),c.a.createElement(R,{values:t,errors:n,touched:r,fieldName:"tokenSymbol",label:"Token symbol",placeholder:"Enter token symbol",helpText:"E.g. TEST",maxLength:10,disabled:a}),c.a.createElement(R,{values:t,errors:n,touched:r,fieldName:"initialAmount",label:"Initial supply",placeholder:"Enter the initial supply",helpText:"E.g. 10",maxLength:13,disabled:a}),c.a.createElement(R,{values:t,errors:n,touched:r,fieldName:"initialOwner",label:"Initial owner",placeholder:"Enter the owner address",helpText:"A valid ethereum address starting with 0x...",maxLength:42,disabled:a,optionalButton:c.a.createElement("button",{type:"button",className:"input-group-prepend",onClick:l,title:f?"Click to close camera":"Click to open the camera and scan a QR code",disabled:a},c.a.createElement(O.a,{icon:f?"window-close":"qrcode"})),optionalExtraControl:f&&c.a.createElement(x.a,{onScan:b(o),onError:u})}),c.a.createElement(I,{key:"create",type:"submit",disabled:a},"Create Token!"," ","\ud83d\ude80\ud83c\udf19"))}}))},_=a(37),M=a.n(_),P=function(e){var t=e.href,a=e.children;return c.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},a)},U=0,F=1,G=2,H=3,B=y.a.div(L||(L=Object(b.a)(['\n  border: 1px solid black;\n  margin: 20px;\n  width: 70%;\n  max-width: 50rem;\n  padding: 1rem;\n  font-family: "Lucida Console", Monaco, monospace;\n  font-size: 1rem;\n  text-align: left;\n']))),V=h.b.div({hidden:{y:100,opacity:0},visible:{y:0,opacity:1}}),q=Object(y.a)(V)(j||(j=Object(b.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),D=function(e){var t=e.visible,a=e.children;return t&&c.a.createElement(q,{initialPose:"hidden",pose:"visible"},a)},W=Object(y.a)(M.a)(T||(T=Object(b.a)(["\n  padding: 1rem;\n  text-align: center;\n"]))),z=function(e){var t=e.currentStep,a=e.cancelled,n=e.transactionHash,r=e.etherscanGetter,o=e.contractAddress,i=e.ownerAddress;return c.a.createElement(B,{key:"status"},c.a.createElement(D,{visible:t>=F},"Deploying ERC20 contract..."),c.a.createElement(D,{visible:t>=F},"Asking for contract creation transaction signature and gas payment..."),c.a.createElement(D,{visible:t>=G},"Broadcasting contract creation to the network..."),c.a.createElement(D,{visible:t>=G},"Transaction broadcast: ",c.a.createElement("strong",null,n)," [",c.a.createElement(P,{href:r&&r.getTxURL(n)},"see on etherescan"),"]"),c.a.createElement(D,{visible:t>=G},"Waiting for transaction confirmation..."),c.a.createElement(D,{visible:t>=H},c.a.createElement("span",{role:"img","aria-label":"kudos"},"\ud83c\udf89\ud83c\udf89\ud83c\udf89"),c.a.createElement("strong",null,"FINISHED!!!")),c.a.createElement(D,{visible:t>=H},"Contract has been created at: ",c.a.createElement("strong",null,o)," ","<<< THIS IS YOUR ERC20 CONTRACT, GIVE THIS ADDRESS TO YOUR USERS!!! [",c.a.createElement(P,{href:o&&r&&r.getAddressURL(o)},"see on etherescan"),"]"),c.a.createElement(D,{visible:t>=H},"Issued tokens address: ",c.a.createElement("strong",null,i)," <<< THIS IS THE INITIAL OWNER OF ALL ISSUED TOKENS!!! [",c.a.createElement(P,{href:i&&r&&r.getAddressURL(i)},"see on etherescan"),"]"),c.a.createElement(D,{visible:t>=H},"[",c.a.createElement(P,{href:o&&r&&r.getTokenURL(o)},"INSPECT ON TOKEN TRACKER"),"]"),!a&&t>=F&&t<H&&c.a.createElement(W,{name:"three-bounce"}),c.a.createElement(D,{visible:a},c.a.createElement("span",{role:"img","aria-label":"cancelled"},"\u274c")," ",c.a.createElement("strong",null,"Operation cancelled"," ",c.a.createElement("span",{role:"img","aria-label":"sad"},"\u2639\ufe0f"))))};function Y(){Y=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function f(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(T){f=function(e,t,a){return e[t]=a}}function l(e,t,a,r){var o=t&&t.prototype instanceof b?t:b,i=Object.create(o.prototype),c=new S(r||[]);return n(i,"_invoke",{value:w(e,a,c)}),i}function d(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(T){return{type:"throw",arg:T}}}e.wrap=l;var s={};function b(){}function u(){}function m(){}var p={};f(p,o,function(){return this});var h=Object.getPrototypeOf,y=h&&h(h(L([])));y&&y!==t&&a.call(y,o)&&(p=y);var v=m.prototype=b.prototype=Object.create(p);function g(e){["next","throw","return"].forEach(function(t){f(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(r,i){!function n(r,o,i,c){var f=d(e[r],e,o);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(s).then(function(e){l.value=e,i(l)},function(e){return n("throw",e,i,c)})}c(f.arg)}(n,o,r,i)})}return r=r?r.then(i,i):i()}})}function w(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return j()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=x(i,a);if(c){if(c===s)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var f=d(e,t,a);if("normal"===f.type){if(n=a.done?"completed":"suspendedYield",f.arg===s)continue;return{value:f.arg,done:a.done}}"throw"===f.type&&(n="completed",a.method="throw",a.arg=f.arg)}}}function x(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),s;var r=d(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return u.prototype=m,n(v,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:u,configurable:!0}),u.displayName=f(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,f(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(E.prototype),f(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new E(l(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(v),f(v,c,"Generator"),f(v,o,function(){return this}),f(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),f=a.call(o,"finallyLoc");if(c&&f){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;O(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:L(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),s}},e}var $=y.a.button(A||(A=Object(b.a)(["\n  background-image: linear-gradient(to bottom right, green, yellow);\n  margin: 1rem;\n"]))),K={transactionConfirmationBlocks:1},J=function(e){var t;if(1===e)t="";else if(3===e)t="ropsten.";else if(4===e)t="rinkeby.";else{if(42!==e)return null;t="kovan."}return{getTxURL:function(e){return"https://".concat(t,"etherscan.io/tx/").concat(e)},getAddressURL:function(e){return"https://".concat(t,"etherscan.io/address/").concat(e)},getTokenURL:function(e){return"https://".concat(t,"etherscan.io/token/").concat(e)}}},Z=function(){var e=Object(i.useState)(),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)(),o=Object(s.a)(r,2),f=o[0],l=o[1],b=Object(i.useState)(),u=Object(s.a)(b,2),y=u[0],v=u[1],E=Object(i.useState)(U),w=Object(s.a)(E,2),x=w[0],k=w[1],O=Object(i.useState)(!1),S=Object(s.a)(O,2),L=S[0],j=S[1],T=Object(i.useState)(),A=Object(s.a)(T,2),N=A[0],I=A[1],R=Object(i.useState)(),_=Object(s.a)(R,2),M=_[0],P=_[1],B=Object(i.useState)(),V=Object(s.a)(B,2),q=V[0],D=V[1],W=function(){var e=Object(d.a)(Y().mark(function e(){var t,a,r;return Y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.givenProvider.enable();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("User has cancelled account access permission");case 8:return t=new m.a(m.a.givenProvider,null,K),e.next=11,t.eth.getAccounts();case 11:return a=e.sent,l(a[0]),e.next=15,t.eth.net.getId();case 15:r=e.sent,v(J(r)),n(t);case 18:case"end":return e.stop()}},e,null,[[0,5]])}));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(d.a)(Y().mark(function e(t){var n,r,o;return Y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return k(F),n={name:t.tokenName.trim(),symbol:t.tokenSymbol.trim(),decimals:18,initialSupply:t.initialAmount.toString()+"0".repeat(18),ownerAddress:t.initialOwner},I(n),r=new a.eth.Contract(p.abi,null,K),e.prev=4,e.next=7,r.deploy({data:p.bytecode,arguments:[n.name,n.symbol,n.decimals,n.ownerAddress,n.initialSupply]}).send({from:f}).on("transactionHash",function(e){P(e),k(G)});case 7:o=e.sent,D(o),k(H),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),j(!0),console.log("User has cancelled token creation");case 16:case"end":return e.stop()}},e,null,[[4,12]])}));return function(t){return e.apply(this,arguments)}}(),Q=Object(i.useRef)(null);return Object(i.useEffect)(function(){Q.current&&Q.current.scrollIntoView({behavior:"smooth"})}),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"create-token-dapp"),c.a.createElement(g,{key:"info"}),a?c.a.createElement(C,{key:"form",onSubmit:Z,disabled:x>U,initialOwner:f}):c.a.createElement($,{key:"begin",onClick:W},"Begin!"),c.a.createElement(h.a,null,x>=F&&c.a.createElement(c.a.Fragment,{key:"status"},c.a.createElement(z,{currentStep:x,cancelled:L,transactionHash:M,etherscanGetter:y,contractAddress:q&&q.options.address,ownerAddress:N&&N.ownerAddress}),c.a.createElement("div",{ref:Q})))),c.a.createElement("hr",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(78);l.a.render(c.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.ece5948e.chunk.js.map