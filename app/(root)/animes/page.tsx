import { SideBarMobile } from '@/components/navigation/SideBarMobile'
import { Button } from '@/components/ui/button'

export default function Animes() {
    return (
        <section className="flex flex-col gap-4">
            <SideBarMobile>
                <Button>Modal</Button>
            </SideBarMobile>
        </section>
    )
}
