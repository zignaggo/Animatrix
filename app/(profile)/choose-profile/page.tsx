import { getProfiles } from "@/components/pages/profiles/mutations"
import { SelectProfile } from "@/components/pages/profiles/select-profile"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function ChooseProfile() {
    const profiles = await getProfiles()
    const client = createClient()
    const { data } = await client.auth.getUser()
    if (!data.user) {
        return redirect('/auth/sign')
    }
    return <SelectProfile profiles={profiles} />
}

