import { createClient } from "@/supabase/server"
import { getProfiles } from "@/components/pages/profiles/mutations"
import { SelectProfile } from "@/components/pages/profiles/select-profile"

export default async function ChooseProfile() {
    const supabase = createClient()
    const profiles = await getProfiles(supabase)
    return <SelectProfile profiles={profiles} />
}

