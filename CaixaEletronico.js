			var nome = prompt("Digite seu nome: ")
			alert(`Olá ${nome} é um prazer ter você por aqui!`)
			var saldo = 100.5; 
			var senha = 3589
			var tentativaSenha = 0
			var extrato = ["52,39 em WeeCoffe", "122,59 em Riachuelo", "339,87 em Converse", "86,47 em FikBella"]

			function verificarSenha() {
				tentativaSenha = parseInt(prompt("Digite a sua senha para entrar:"))
				while (tentativaSenha != senha) {
					tentativaSenha = parseInt(prompt("Senha incorreta. Tente novamente:"))
				}
			}

			function inicio() {

			var escolha = parseInt(prompt('(1)- Saldo (2)- Extrato (3)- Saque (4)- Depósito (5)- Transferência (6)- Sair'));
			switch (escolha){
				case 1:
					verificarSenha();
					verSaldo();
					break;
		
				case 2:
					verificarSenha();
					verExtrato();
					break;
		
				case 3:
					verificarSenha();
					fazerSaque();
					break;
		
				case 4:
					verificarSenha();
					fazerDeposito();
					break;
		
				case 5:
					verificarSenha();
					fazerTransferencia()
					break;
		
				case 6:
					sair();
		
				default:
					alert("Opção Inválida!")
					break;
			}
			
			}		

			function ver_saldo() {
				alert('Seu saldo atual é: ' + saldo);
				inicio();
			}

			function fazer_deposito() {
			var deposito = parseFloat(prompt('Digite o valor para depósito'));
			if (isNaN(deposito) || deposito <= 0) {
				alert('Por favor, informe um número:');
				fazer_deposito();
			} else {
				saldo += deposito;
				ver_saldo();
			}
		}

		function fazer_saque() {
			var saque = parseFloat(prompt('Digite o valor para saque'));
			if (isNaN(saque) || saque <= 0) {
				alert('Por favor, informe um número:');
				fazer_saque();
			} else {
				saldo -= saque;
				
				ver_saldo();
			}
		}

			function fazer_transferencia() {
				var conta = Float(prompt("Digite a conta no qual gostaria de transferir:"))
				var transferir = parseFloat(prompt("Digite o valor da transferência"))
				if (transferir > saldo || transferir <= 0) {
					erro()
				} else {
					saldo = saldo - transferir;
					alert(`Valor transferido. Seu saldo atual agora é ${saldo}`)
				}
				inicio();
			}

			function ver_extrato() {
				alert(extrato)
				inicio()
			}

			function erro() {
				alert('Operação não autorizada. Volte ao menu para tentar novamente!');
				inicio();
			}

			function sair() {
				var confirma = confirm('Você deseja sair?');
				if (confirma) {
					alert(`${nome}, foi um prazer ter você por aqui!`);
					window.close()
				} else {
					inicio();
				}
			}


			inicio();
