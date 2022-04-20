import sys
import base64
#print("Mugre basura")
#print(sys.argv[1])

text = sys.argv[1]
plain = str(text)

LETRAS = ("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ")

def descifrar_mensaje(clave,mensa):
    return traductor_mensaje(clave,mensa,'descifrar')

def traductor_mensaje(clave,mensa,accion):
    traducido=[]
    indice_clave=0
    clave=clave.upper()

    for symbol in mensa:
        num=LETRAS.find(symbol.upper())
        if num!=-1:
            if accion=='descifrar':
                num-=LETRAS.find(clave[indice_clave])
            num%=len(LETRAS)
            if symbol.isupper():
                traducido.append(LETRAS[num])
            elif symbol.islower():
                traducido.append(LETRAS[num].lower())
            indice_clave+=1
            if indice_clave==len(clave):
                indice_clave=0

        else:
            traducido.append(symbol)
    return ('').join(traducido)
    
msg_bytes = plain.encode("ascii")
base64_bytes = base64.b64decode(msg_bytes)
base64_msg = base64_bytes.decode("ascii")

traducido = descifrar_mensaje("ayush", base64_msg)

print(traducido)