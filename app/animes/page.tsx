import { Button } from '@/components/ui/button'
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
export default function Animes() {
    return (
        <section className="flex flex-col p-10 gap-4">
            <div className="flex gap-4">
                <Button variant={'default'} size={'lg'}>
                    <EnvelopeOpenIcon /> Primary <EnvelopeOpenIcon /> 
                </Button>
                <Button variant={'secondary'} size={'lg'}>
                    Secondary
                </Button>
                <Button variant={'outline'} size={'lg'}>
                    Tertiary
                </Button>
                <Button variant={'text'} size={'lg'}>
                    Text
                </Button>
                <Button variant={'success'} size={'lg'}>
                    Sucess
                </Button>
                <Button variant={'danger'} size={'lg'}>
                    Danger
                </Button>
            </div>
            <div className="flex gap-4">
                <Button variant={'default'}>Primary</Button>
                <Button variant={'secondary'}>Secondary</Button>
                <Button variant={'outline'}>Tertiary</Button>
                <Button variant={'text'}>Text</Button>
                <Button variant={'success'}>Sucess</Button>
                <Button variant={'danger'}>Danger</Button>
            </div>
            <div className="flex gap-4">
                <Button variant={'default'} size={'sm'}>
                    Primary
                </Button>
                <Button variant={'secondary'} size={'sm'}>
                    Secondary
                </Button>
                <Button variant={'outline'} size={'sm'}>
                    Tertiary
                </Button>
                <Button variant={'text'} size={'sm'}>
                    Text
                </Button>
                <Button variant={'success'} size={'sm'}>
                    Sucess
                </Button>
                <Button variant={'danger'} size={'sm'}>
                    Danger
                </Button>
            </div>
        </section>
    )
}
