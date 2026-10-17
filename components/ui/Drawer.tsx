"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/Drawer"

import { Input } from "@base-ui/react"
import { TableDemo } from "@/products-table";
import { toast } from "sonner"

export function DrawerDemo() {
    const [open, setOpen] = React.useState(false)
    const [name, setName] = React.useState<string>("")
    const [price, setPrice] = React.useState<number>(0)

    async function DrawerDemo() {
        try {
            const res = await fetch('http://localhost:4000/api/products', {
                method: "POST",
                body: JSON.stringify({
                    name,price
                })
            });
            if (!res.ok) {
                toast.error("Xatolik yuz berdi")
            } else {
                const data = await res.json();
                <TableDemo products={data}/>
                toast.success("Mahsulot yaratildi")
            }
        } catch (error) {
            toast.error('xatolik')
        } finally {
            setOpen(false)
        }
    }

    return (
        <Drawer 
        open={open}
        onOpenChange={setOpen}> 
        <DrawerTrigger render={<Button variant="secondary">Open Drawer</Button>} />
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>Pick a delivery time</DrawerTitle>
               <DrawerDescription>
                We&apos;ll preparo your order as soon as possible.
               </DrawerDescription>
            </DrawerHeader>
            <div className="flex-1 scroll-fade overFlow-y-auto p-4 flex flex-col gap-3">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full h-8 
                outline-1 rounded-2xl px-3 text-lg" />
                <Input value={price} onChange={(e) => setPrice(Number(e.target.value))} type="number"
                className="w-full h-8 outline-1 rounded-2xl px-3 text-lg"
                />
            </div>
            <DrawerFooter>
                <Button onClick={handleConfirm} className="h-34px">
                    Confirm Delivery Time
                </Button>
                <DrawerClose render={<Button variant="outline">Cancel</Button>}/>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
    )
}