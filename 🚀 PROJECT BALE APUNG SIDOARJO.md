# 🚀 Landing Page Template — Niche: [Restaurant] — Project Name: [Bale Apung Sidoarjo]

---

## 📌 Daftar Isi

1. [Deskripsi Project](#deskripsi-project)
2. [Data Klien Google Maps](#data-klien-google-maps)
3. [Tech Stack & Tools](#tech-stack--tools)
4. [Design System](#design-system)
5. [Struktur Folder Project](#struktur-folder-project)
6. [Arsitektur Landing Page](#arsitektur-landing-page)

---

## 1. Deskripsi Project

Kamu adalah seorang **Senior Frontend Engineer · Senior UI/UX Engineer · Senior Product Engineer.**

**[PROJECT NAME]** merupakan representasi Brand di Google Maps **[NAMA BRAND DI GOOGLE MAPS]** yang mana datanya sudah disertakan di dalam bab [Data Klien Google Maps].

Bangun dan buatkan sebuah representasi dari Brand **[NAMA BRAND DI GOOGLE MAPS]** dengan desain modern 2026, dibantu **Three.js** dan **Framer Motion** yang menurut kamu — sebagai Senior Engineer — terbaik dalam segi **desain visual, copywriting singkat padat jelas dan user dapat checkout item dan user dapat bayar qris.**

| Aspek | Detail |
|---|---|
| **Target User Usia** | [20-30] Tahun |
| **Target Device** | [WEBSITE DAN HP] |
| **Goal Utama** | Desain modern dengan Three.js + Framer Motion, copywriting yang kuat, dan USER DAPAT CHECKOUT TERKAIT MENU MENU YANG ADA DI RESTORANT TERSEBUT MELALUI WEBSITE DAN bisa membayar VIA QRIS langsung setelah ada di KERANJANG |
| **Tone Visual** | [BOLD DAN PREMIUM] |
| **Bahasa Konten** | [Indonesia] |

---

## 2. Data Klien Google Maps

> Jika di kebutuhan Data dan Testimoni, nantinya tidak ada di data berikut ini maka kosong atau replace yang ada dulu.

```json
{
    "searchParameters": {
        "q": "Bale Apung Sidoarjo",
        "type": "maps",
        "num": 10,
        "page": 1,
        "engine": "google"
    },
    "ll": "@-7.486277,112.7120002,17z",
    "places": [
        {
            "position": 1,
            "title": "Bale Apung Sidoarjo",
            "address": "Jl. Raya Gelam No.45, Gelam, Candi, Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61271, Indonesia",
            "latitude": -7.486276999999999,
            "longitude": 112.71200019999999,
            "rating": 4.7,
            "ratingCount": 1167,
            "priceLevel": "Rp 25–125K",
            "type": "Restaurant",
            "types": [
                "Restaurant",
                "Ikan bakar restaurant",
                "Indonesian restaurant"
            ],
            "phoneNumber": "+62 819-3854-1217",
            "openingHours": {
                "Wednesday": "10 AM–10 PM",
                "Thursday": "10 AM–10 PM",
                "Friday": "10 AM–10 PM",
                "Saturday": "10 AM–10 PM",
                "Sunday": "10 AM–10 PM",
                "Monday": "10 AM–10 PM",
                "Tuesday": "10 AM–10 PM"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE90kaTaNHHBEBe3D9t0wyTrX32u9aqEUZrEBbmQAF-Mm8LbtRWFteXVaFQkktoz42Z4G9frnyBBR_LuJYAb_aBSBVLhq-vp5wudCSwz-3DghAd1yd3YnzXeiG2uo-k3uAPmHFAM_OgzzYL",
            "cid": "6697901936119700785",
            "fid": "0x2dd7e1d4cb30775f:0x5cf3ba52ead0dd31",
            "placeId": "ChIJX3cwy9Th1y0RMd3Q6lK681w"
        }
    ],
    "credits": 3
}
```

### Testimoni (dari Google Maps)
```json
{
    "searchParameters": {
        "type": "reviews",
        "num": 10,
        "page": 1,
        "fid": "0x2dd7e1d4cb30775f:0x5cf3ba52ead0dd31",
        "cid": "6697901936119700785",
        "placeId": "ChIJX3cwy9Th1y0RMd3Q6lK681w",
        "engine": "google"
    },
    "reviews": [
        {
            "rating": 5,
            "date": "4 months ago",
            "isoDate": "2026-01-11T05:16:51.299Z",
            "snippet": "Unexpectedly very delicious, definitely worth the money. We came at around 12 pm, so there were only few customers there. The lychee tea is very good, the gurame asam manis is extremely delicious, and the cumi is also unexpectedly good. Food portion is just right, not so big nor small, just enough. Will definitely come back again!",
            "likes": 0,
            "user": {
                "name": "Alifatul Yusufi",
                "thumbnail": "https://lh3.googleusercontent.com/a/ACg8ocIZqC4TCJWLLswVlxPjn5FTA8PHpBWSgElS0OYVoC43FuaVcw=s64-c-rp-mo-ba12-br100",
                "link": "https://www.google.com/maps/contrib/106550632663073284162/reviews?hl=en-US",
                "reviews": 8,
                "photos": 6
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn2JT6zKIgRvqruHNsmRXlvu50ylwKOCKlrvmqR9M00N4LzaQOKx7Exgdg95BH8AMbhuMUyF84ygahHbPo3bFafe2lNwLXSxyF_r3l7sVPdqXbS134DRSnfP4cNKkMmJrZToKK2VUvYmIjdg=k-no"
                }
            ],
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2s5SmJrVnlhbU5GTlZoS1ZteG9MVGxrTmxKa09VRRAB!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CAIQACodChtycF9oOk9JbkVyamNFNVhKVmxoLTlkNlJkOUE%7C%7C?hl=en-US",
            "id": "Ci9DQUlRQUNvZENodHljRjlvT2s5SmJrVnlhbU5GTlZoS1ZteG9MVGxrTmxKa09VRRAB"
        },
        {
            "rating": 4,
            "date": "4 months ago",
            "isoDate": "2026-01-02T14:29:13.017Z",
            "snippet": "Food was good and reasonably priced. The only downside was the juice, which felt a bit diluted.",
            "likes": 0,
            "user": {
                "name": "Shasha Lin",
                "thumbnail": "https://lh3.googleusercontent.com/a-/ALV-UjUceknwGl_OSBpa1olEORYjx6qnqKR1gFjmrAuvsf5n3jMpyZ18=s64-c-rp-mo-ba12-br100",
                "link": "https://www.google.com/maps/contrib/116393846491995682435/reviews?hl=en-US",
                "reviews": 79,
                "photos": 261
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn2GA732dPL99Yv3mJ7PXHvOhxwAFuNkHhtFj8CdStwYiyy-Fcqg8MNzzue6vOpDCyoTopeRT8Q8Le4sU0BZz55YRzi4CxEFP5uUA9_awKVrpA4B-9YWMaVvewFNFlvkIzJLSlFPUBJKpms=k-no"
                }
            ],
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25kNFJIQjRWMGxKVTBWVFNsWjRSMDVZVDBGdVJFRRAB!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CAIQACodChtycF9oOnd4RHB4V0lJU0VTSlZ4R05YT0FuREE%7C%7C?hl=en-US",
            "id": "Ci9DQUlRQUNvZENodHljRjlvT25kNFJIQjRWMGxKVTBWVFNsWjRSMDVZVDBGdVJFRRAB"
        },
        {
            "rating": 5,
            "date": "a year ago",
            "isoDate": "2025-02-20T11:24:38.490Z",
            "snippet": "Good food, cozy surrounding, recommended for you whom look for different experience.",
            "likes": 0,
            "user": {
                "name": "Siti Murdiyah",
                "thumbnail": "https://lh3.googleusercontent.com/a-/ALV-UjVz0FldM9Tscay31ON8OOl_B-Qbu-vyHgE_1-Pmh7ClvqOQi2w=s64-c-rp-mo-br100",
                "link": "https://www.google.com/maps/contrib/109639844482448538153/reviews?hl=en-US",
                "reviews": 3,
                "photos": 1
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn3-hBvYRCPrMQF9L1gI-kUKd4wE5ttz_Lf2wfNP2GqQnk2mHpk9eco4R3gM8KvFCpO-UczKiwjWL6fHV8kaoIhX1bohKPzOoQtVtoViM5nZrDnRtrGp_eZwjD5bDmDpksPG0mjl=k-no"
                }
            ],
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUNnNDZUbGhRRRAB!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CIHM0ogKEICAgMCg46TlhQE%7C%7C?hl=en-US",
            "id": "ChdDSUhNMG9nS0VJQ0FnTUNnNDZUbGhRRRAB"
        },
        {
            "rating": 5,
            "date": "2 years ago",
            "isoDate": "2024-03-06T11:44:06.451Z",
            "snippet": "Good experience for out door dining❤️❤️❤️",
            "likes": 1,
            "user": {
                "name": "Tri Endah Prasetyastuti",
                "thumbnail": "https://lh3.googleusercontent.com/a/ACg8ocKS90s3wnmYCiXMqO_9JHzJmur3lxhg3RfAOwV-M-bw5Ogz-g=s64-c-rp-mo-br100",
                "link": "https://www.google.com/maps/contrib/114268983666963373920/reviews?hl=en-US",
                "reviews": 1,
                "photos": 5
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn3vapXQGJ8buUJD-s2JuYht5lZhYJknKcaTyM2P1_2-L4gJOLCtJZKAYUuia3i6KoXCfoBfQ-Cf0e3WEKRPQE1DeBod3-DTZfAw2M_inmClckCqTyC_vYqTYaIeEQtCpB3nSoqJ=k-no"
                },
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn0dtuq3-SE5xr56Ze2wm7i-dZuzX1Xw5VKfaV-v6jwuXZxJoOYl9HFL9mZ5v0UCcRYutnnJZ1dJa1dtWdgT5ApfVAY3PCJjh_oSH1Zh7MvT1-8IBQpMAc_rt-fTvvRQtLKUqhJe6Q=k-no"
                },
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn3808ZCFpJWh74UMkoxuChf-nzxN8ZJoFz-eaYPwHTnjjY0XPMuiFN5gZPhm4h1LMMgkl98wSm8tNSlBgontBSO6o4_JekCrIE9ZKl0aoAeT8SbREyWr1_0wbttbinfejJIjA8s=k-no"
                },
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn3FEXtW4odlJIxsQ4VV0LTj9n3gVmISJjfdOU2eP13VJcfSFdrbtlykYvOjGjgdZJ_YxA8fCPwssDHkeqOP5jVEnENHZzPYhYo-b3p8wLyWexgtoEMtA-dOvinqevfoCba2wjvfdA=k-no"
                },
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn2iGUXHE_dfm1NYagBqUuIgpMQy4HVFwN-bztCkq5e1dg_dwab90npRZzV-3Q2LV7DDaJdndBmi7wokJ7H_YtEb6GCeN029_1rDgKWrDX870hnm-8W7z69JYoQlVu8ZwRvQagzy=k-no"
                }
            ],
            "response": {
                "date": "2 years ago",
                "snippet": "Alhamdulillah terima kasih atas kunjungan & review nya ya kak🙏"
            },
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUM5b2FUNUR3EAE!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CIHM0ogKEICAgIC9oaT5Dw%7C%7C?hl=en-US",
            "id": "ChZDSUhNMG9nS0VJQ0FnSUM5b2FUNUR3EAE"
        },
        {
            "rating": 5,
            "date": "4 months ago",
            "isoDate": "2025-12-27T05:41:04.952Z",
            "snippet": "Best fresh food",
            "likes": 0,
            "user": {
                "name": "Atha",
                "thumbnail": "https://lh3.googleusercontent.com/a/ACg8ocLzEupg3oJPL4QFaGS1AnVJObUsI-HZygOdcdUWRb8MxQwZrQ=s64-c-rp-mo-br100",
                "link": "https://www.google.com/maps/contrib/113446785283694589113/reviews?hl=en-US",
                "reviews": 1,
                "photos": 2
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn09pU_VYBfKzjn8AjS7TMFqPgE5sBSfS5DfHnshYM_LnE15gVWjQMWaj2bAXSc5Rxqc23Yc5pKF73X92PLxjBm-MKKEpEFTl2i1ptoJTYZm84Chy0onb_jGE4Mi4mmYW9k-rbppzndk7Go8=k-no"
                },
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn2SNlbcjc_fs4nAJVmUaDGNa2jkot6qrgQ8qvlhGun1xEuQjJ59hptCMbLaMqocbYx8Pz7cfxnj5YlFT8f5coa_qQcbs6IU-QtKxDQPlZyLxLV_52iE6SdteFrwOlDii4rpeLxwXb37GDwz=k-no"
                }
            ],
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25oVFVqQXpSR2RYVlVOWWVXcFZZMUJZZURsTWVsRRAB!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CAIQACodChtycF9oOnhTUjAzRGdXVUNYeWpVY1BYeDlMelE%7C%7C?hl=en-US",
            "id": "Ci9DQUlRQUNvZENodHljRjlvT25oVFVqQXpSR2RYVlVOWWVXcFZZMUJZZURsTWVsRRAB"
        },
        {
            "rating": 5,
            "date": "11 months ago",
            "isoDate": "2025-05-25T12:55:26.036Z",
            "snippet": "Recommended guys, skuy mampir 🫰",
            "likes": 0,
            "user": {
                "name": "Riris Kamila",
                "thumbnail": "https://lh3.googleusercontent.com/a-/ALV-UjVmpVdGdpfv8TwRKnyKv3_OviILpQnguLASTDkB-YL7RroFhBU=s64-c-rp-mo-br100",
                "link": "https://www.google.com/maps/contrib/106817486277406909591/reviews?hl=en-US",
                "reviews": 3,
                "photos": 1
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn3HB0L0A1qw8frcROdWRcfiPWlltj5B_Y_tlMeTPSszT43qjY4slQoxOrCP38b9Rea1xjPhMEiuwusuU7q0SBWfl1rupI0AjvSFsUG3WbwCD_kYBlNgm2OA_jZHeWBxX7vDo0mdvg=k-no"
                }
            ],
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VMeTNucV9mbjRmRldBEAE!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CIHM0ogKELy3nq_fn4fFWA%7C%7C?hl=en-US",
            "id": "ChZDSUhNMG9nS0VMeTNucV9mbjRmRldBEAE"
        },
        {
            "rating": 5,
            "date": "11 months ago",
            "isoDate": "2025-06-03T13:25:49.920Z",
            "snippet": "Joss",
            "likes": 0,
            "user": {
                "name": "Mochamad Arifin",
                "thumbnail": "https://lh3.googleusercontent.com/a-/ALV-UjUfclZ4kKz3emlW28p0CXwAB2H4_NfF-JTvRELo07lu7Oq3CnOOUw=s64-c-rp-mo-ba12-br100",
                "link": "https://www.google.com/maps/contrib/108043289017522263863/reviews?hl=en-US",
                "reviews": 14,
                "photos": 9
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn30BLfHSK6OGyQ9WSqaGLE2SPSLOf3a1J5bvIiTKartKSt8i9CJWAiTSUV7dhJCFlj5aUDYLj1gPUUE7DK--JaFklS9rZEJIeaAxBkw_UTsYNX7UDnE26V7daJEr3mnI1w9aZHg=k-no"
                },
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn3kqT9xljKB_I_XvD6JSR-wRkZvPooNx6fVygbRzS9P3SDifLLyGt7hEPXSY3loia5_8gxYleH5UJ4NK0wcsUAWHjAQzoZw7P6xpF9zSY-e5s9Ik79ko54OBOPb_vnVxLhBkJo=k-no"
                },
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn3CxahLvCEjzipbOtKhBfHajkwjJ5gbGz7zZQSUjZW7LR2UUjUKKG3c_yZ_ooEbSoKrsNpn1oJBeiXzweqChvrRojj60dl14kCpNypr7aAPxpYOkjqrELBMXNuFK7Mo266lMqat=k-no"
                },
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn3HsGeBasmiKKToU2H5MrHkYUmRn1uYiwNEqnNdxldL2lCzNsWpakiM0g4IV6xW0fx-ERbwPtoL6Eip8uoG6Jfjqk4t2n2vCIoKbzvHkZDDoTneqlN1fM7FNBY5ShnDOk09loC08Q=k-no"
                }
            ],
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VLNnd6cEwwNnJ1VVBBEAE!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CIHM0ogKEK6wzpL06ruUPA%7C%7C?hl=en-US",
            "id": "ChZDSUhNMG9nS0VLNnd6cEwwNnJ1VVBBEAE"
        },
        {
            "rating": 4,
            "date": "4 months ago",
            "isoDate": "2025-12-28T08:56:45.123Z",
            "snippet": "Ok recomended for dine in with family",
            "likes": 0,
            "user": {
                "name": "Dika Glm",
                "thumbnail": "https://lh3.googleusercontent.com/a/ACg8ocLj1AikIbRITxFvKkl1SJ0k1Z8hqdtRmiceUl-qQGd8_spggw=s64-c-rp-mo-ba12-br100",
                "link": "https://www.google.com/maps/contrib/106763321703214113485/reviews?hl=en-US",
                "reviews": 311,
                "photos": 272
            },
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2kxblUwbE9VMVpzUVRaalJsQm1hVGRyWW5KMlMxRRAB!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CAIQACodChtycF9oOi1nU0lOU1ZsQTZjRlBmaTdrYnJ2S1E%7C%7C?hl=en-US",
            "id": "Ci9DQUlRQUNvZENodHljRjlvT2kxblUwbE9VMVpzUVRaalJsQm1hVGRyWW5KMlMxRRAB"
        },
        {
            "rating": 5,
            "date": "11 months ago",
            "isoDate": "2025-05-25T09:12:23.065Z",
            "snippet": "part 2",
            "likes": 0,
            "user": {
                "name": "Rizka Tama",
                "thumbnail": "https://lh3.googleusercontent.com/a/ACg8ocKLYX1DXpGSzs6T80qaCrUqlXDbqY-P-wqYI584Te8B_CStKw=s64-c-rp-mo-br100",
                "link": "https://www.google.com/maps/contrib/116420764581250316203/reviews?hl=en-US",
                "reviews": 2,
                "photos": 1
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn3dDBxyoYnz1ink0XG6wFOLw1FENIQC8DRUncfzXuL2GiHS95iMpXKiMwuXtWt_ACRW6q2Ce3rce93S3mggmV0oH1AFpLKLkAuhzhmsEhHTUnFXuN229Nuk0Cb_5O0CXwdQho0=k-no"
                }
            ],
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VQRzZ6dVBiODVQdUF3EAE!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CIHM0ogKEPG6zuPb85PuAw%7C%7C?hl=en-US",
            "id": "ChZDSUhNMG9nS0VQRzZ6dVBiODVQdUF3EAE"
        },
        {
            "rating": 5,
            "date": "a year ago",
            "isoDate": "2024-05-25T12:37:58.926Z",
            "snippet": "The food is amazing, espacially the fish is really nice, thanx all",
            "likes": 0,
            "user": {
                "name": "moddy mad",
                "thumbnail": "https://lh3.googleusercontent.com/a-/ALV-UjVQQ-trE81WeeHd5JagAsmSvngYv-BuhFv2IEY8glN7Sz29Vnn0=s64-c-rp-mo-br100",
                "link": "https://www.google.com/maps/contrib/102500844060504480646/reviews?hl=en-US",
                "reviews": 2,
                "photos": 0
            },
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURUMGZLN2NnEAE!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CIHM0ogKEICAgIDT0fK7cg%7C%7C?hl=en-US",
            "id": "ChZDSUhNMG9nS0VJQ0FnSURUMGZLN2NnEAE"
        },
        {
            "rating": 5,
            "date": "10 months ago",
            "isoDate": "2025-07-10T03:54:35.500Z",
            "snippet": "Ok",
            "likes": 0,
            "user": {
                "name": "Use Nathan",
                "thumbnail": "https://lh3.googleusercontent.com/a-/ALV-UjWaguznLyGDgC2LhpZPXqERABvShlGu1afnGSQI_eOU_BD3_yTTZQ=s64-c-rp-mo-ba12-br100",
                "link": "https://www.google.com/maps/contrib/114513982811398403922/reviews?hl=en-US",
                "reviews": 796,
                "photos": 682
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn0Gj5OOhpo7qmdD0seb-4EMeSeO3S0Mc70IEQk6_y_A7fGSKmBWNjYQajJtk-OUzhkKbfElIbipCk3LxAqNUj8vZcht7POYCFfy0RQDxYLDPV5JOtpCKQTYTcvF2jhGHpaQH4uE2j7-KXPQ=k-no"
                }
            ],
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2sxbVdEUlNaR3ROZWxWWldGcHphMFJVTlMxdVRHYxAB!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CAIQACodChtycF9oOk1mWDRSZGtNelVZWFpza0RUNS1uTGc%7C%7C?hl=en-US",
            "id": "Ci9DQUlRQUNvZENodHljRjlvT2sxbVdEUlNaR3ROZWxWWldGcHphMFJVTlMxdVRHYxAB"
        },
        {
            "rating": 5,
            "date": "10 months ago",
            "isoDate": "2025-06-23T11:30:39.084Z",
            "snippet": "u must try guys!",
            "likes": 1,
            "user": {
                "name": "Regista Ajeng",
                "thumbnail": "https://lh3.googleusercontent.com/a/ACg8ocJxzxple9Jor3XU5wKjhp3arD7EjIfkzBuOBQ9jSaF-Kqh7KQ=s64-c-rp-mo-br100",
                "link": "https://www.google.com/maps/contrib/102113279813895537686/reviews?hl=en-US",
                "reviews": 1,
                "photos": 0
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn08C4olErDfI9Wi57H0ND3EOW0ckO0j1qlp408yslLAKaQY4__TmKNVPKzHF8rj2djlv91uGF3zGi3syH4f0xGPuWKYdh1fgy6kkxDUtSzlJ-03diDIw-lOHYJ61XZh9GdSp-yifVmIAzCd=k-no",
                    "caption": "u must try guyss!"
                }
            ],
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2w5Q2RUVlNVM2REU2poWGJHSjJSMDlOV2s5NUxYYxAB!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CAIQACodChtycF9oOl9CdTVSU3dDSjhXbGJ2R09NWk95LXc%7C%7C?hl=en-US",
            "id": "Ci9DQUlRQUNvZENodHljRjlvT2w5Q2RUVlNVM2REU2poWGJHSjJSMDlOV2s5NUxYYxAB"
        },
        {
            "rating": 5,
            "date": "a year ago",
            "isoDate": "2024-05-29T13:34:34.029Z",
            "snippet": "Great food, nice place, and remarkable service...",
            "likes": 1,
            "user": {
                "name": "Donny Aria Mahbubi",
                "thumbnail": "https://lh3.googleusercontent.com/a/ACg8ocKOVprLi4qG8N2fmfLEZxul0-uQpSipFuZ-CwM1eA1NJFmpDA=s64-c-rp-mo-br100",
                "link": "https://www.google.com/maps/contrib/107572829777376125684/reviews?hl=en-US",
                "reviews": 2,
                "photos": 0
            },
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURUdjVpVXh3RRAB!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CIHM0ogKEICAgIDTv5iUxwE%7C%7C?hl=en-US",
            "id": "ChdDSUhNMG9nS0VJQ0FnSURUdjVpVXh3RRAB"
        },
        {
            "rating": 5,
            "date": "a year ago",
            "isoDate": "2024-07-13T11:49:23.898Z",
            "snippet": "Nice place for hangout",
            "likes": 1,
            "user": {
                "name": "Pungky Arief Wahyudi",
                "thumbnail": "https://lh3.googleusercontent.com/a-/ALV-UjWS83SZHab5KoZtQtCimWTHKz_P9Gk5Ks7TSzdhPwMnXBS1Qj0=s64-c-rp-mo-br100",
                "link": "https://www.google.com/maps/contrib/101325475815864045110/reviews?hl=en-US",
                "reviews": 1,
                "photos": 1
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn3OpWGCPQM5Q1uzWr2JpTXjQHBM7OoZJpaUMc73HWEKd9oUyKwrbsdM9KSjeunLkHhYwB3f5f9ADbk0ydFfxeiNx4SBEj-NKjkSLXoQBbK6eVCgPVf0fD8f152W8Lxi_zDx5kMC=k-no"
                }
            ],
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURyaUxUYktREAE!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CIHM0ogKEICAgIDriLTbKQ%7C%7C?hl=en-US",
            "id": "ChZDSUhNMG9nS0VJQ0FnSURyaUxUYktREAE"
        },
        {
            "rating": 5,
            "date": "a year ago",
            "isoDate": "2025-02-16T13:59:28.024Z",
            "snippet": "Top bingiiit..",
            "likes": 0,
            "user": {
                "name": "LAILATUL MUBAROKAH",
                "thumbnail": "https://lh3.googleusercontent.com/a/ACg8ocJiJfnzROTE8bfb69UfkFJOc4mGRnpSwdBUbPdXCc7rXrXtWg=s64-c-rp-mo-br100",
                "link": "https://www.google.com/maps/contrib/100495203353192689193/reviews?hl=en-US",
                "reviews": 1,
                "photos": 2
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn0aTxyn0RQBfV6-_oPY51tuSclwm7o4cjDn78ElDgeG64BsJfuFMoASOBJlyuP128yP8baG8KU2ZQLf3s-rqcXpFxxUotSXr9fc8JsuBJU51teJv64pDBJpTusSvYvYVFD-sZuT=k-no"
                }
            ],
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUNnaHF6WHN3RRAB!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CIHM0ogKEICAgMCghqzXswE%7C%7C?hl=en-US",
            "id": "ChdDSUhNMG9nS0VJQ0FnTUNnaHF6WHN3RRAB"
        },
        {
            "rating": 5,
            "date": "7 months ago",
            "isoDate": "2025-10-12T07:58:54.235Z",
            "snippet": "Good food.",
            "likes": 0,
            "user": {
                "name": "Anita Farianti",
                "thumbnail": "https://lh3.googleusercontent.com/a-/ALV-UjU0KakTYQBbvWF-LZDPO5fg8SfPSJkVx0cf40rMVa5DPVL6Yaw=s64-c-rp-mo-br100",
                "link": "https://www.google.com/maps/contrib/104508175962857754925/reviews?hl=en-US",
                "reviews": 2,
                "photos": 9
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn2ugUCs7eRB1wKFP7H2onxJjS_Xv8N0bHI2yFsvVu1Qw1IlhQuQcUS8FJolBJzqmpxKgsTxebv5DT4EXlYkXgC8aWNYV6W2HvrGFMp3A9A-xuY5-ILBACNlea-EneZENFhIooFsAnKcTMY=k-no"
                }
            ],
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21WWFgwRk9XRkZRZGxSNFJFZzVjbkZ3U1ZwNE5FRRAB!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CAIQACodChtycF9oOmVXX0FOWFFQdlR4REg5cnFwSVp4NEE%7C%7C?hl=en-US",
            "id": "Ci9DQUlRQUNvZENodHljRjlvT21WWFgwRk9XRkZRZGxSNFJFZzVjbkZ3U1ZwNE5FRRAB"
        },
        {
            "rating": 5,
            "date": "a year ago",
            "isoDate": "2025-02-15T14:03:46.972Z",
            "snippet": "good place and menu….",
            "likes": 0,
            "user": {
                "name": "Rosi Dwi Ari Wijaya",
                "thumbnail": "https://lh3.googleusercontent.com/a-/ALV-UjVN8md27TBBS4ic205BWJtteOntujfJKhVsMr-2yieyAQ8Aj8L-=s64-c-rp-mo-ba12-br100",
                "link": "https://www.google.com/maps/contrib/109799386442730014084/reviews?hl=en-US",
                "reviews": 18,
                "photos": 17
            },
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTUNna3VHWUtnEAE!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CIHM0ogKEICAgMCgkuGYKg%7C%7C?hl=en-US",
            "id": "ChZDSUhNMG9nS0VJQ0FnTUNna3VHWUtnEAE"
        },
        {
            "rating": 5,
            "date": "a year ago",
            "isoDate": "2024-06-15T05:58:49.888Z",
            "snippet": "Good service",
            "likes": 0,
            "user": {
                "name": "Choirul Mufas",
                "thumbnail": "https://lh3.googleusercontent.com/a/ACg8ocK9rLkTBspMrATMrf23qGxyYrqUGIRJeATJ1u9gMPdtGhRAHZg=s64-c-rp-mo-ba12-br100",
                "link": "https://www.google.com/maps/contrib/113039606146219209474/reviews?hl=en-US",
                "reviews": 11,
                "photos": 11
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn2BcDSTYsYwuKKtzTA3NhybKZHcsp80HjK93_0zuyFyBmJL3o2hMtfOo1I2O8n-HAlYpNXTlFtJbctqR0JWx_LuOh8MFEJTFRThBQXWBMN5xD--YA5LpOBm6LM-DW9uBAUKNgGe=k-no"
                }
            ],
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNMaFBlM2FREAE!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CIHM0ogKEICAgICLhPe3aQ%7C%7C?hl=en-US",
            "id": "ChZDSUhNMG9nS0VJQ0FnSUNMaFBlM2FREAE"
        },
        {
            "rating": 5,
            "date": "a year ago",
            "isoDate": "2024-08-05T11:32:15.379Z",
            "snippet": "Recomended poll",
            "likes": 0,
            "user": {
                "name": "Nur Kasminah",
                "thumbnail": "https://lh3.googleusercontent.com/a/ACg8ocIjfqMDvMWPWO62RO0bKoh4OlFMH6AkdgXf3Vu-33PhH9xV4Q=s64-c-rp-mo-br100",
                "link": "https://www.google.com/maps/contrib/105263634313154087658/reviews?hl=en-US",
                "reviews": 1,
                "photos": 2
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn1ZQaF5zzLbGQroqL0CQmwyITfBwLBvcu9vBg14YhpXch-QaurxNtoYvYeWGjd_gfwJACaHthOWV55Xs9iFkrEJuemfslNPt5GuT6-GYDAcJrljS5m1cnt04G-FE32GRpwYBTtP=k-no"
                }
            ],
            "response": {
                "date": "a year ago",
                "snippet": "Terima kasih atas kedatangannya dan menjadi pelanggan setia kami. Dukungan dan ulasan Anda yang luar biasa sangat berarti bagi kami. Apabila ada yang tidak berkenan, kritik dan saran dapat menghubungi kami . Kami tunggu kedatangan berikutnya, ya. Hope you enjoy it!"
            },
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURiOXNmVV9BRRAB!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CIHM0ogKEICAgIDb9sfU_AE%7C%7C?hl=en-US",
            "id": "ChdDSUhNMG9nS0VJQ0FnSURiOXNmVV9BRRAB"
        },
        {
            "rating": 5,
            "date": "a year ago",
            "isoDate": "2024-06-09T14:48:05.157Z",
            "snippet": "wow",
            "likes": 0,
            "user": {
                "name": "Sabrina Zifa",
                "thumbnail": "https://lh3.googleusercontent.com/a/ACg8ocLChnzcr4m4HmOmZLAgS2vRT2jpxXQ7SPE_fWI_1mD20yHhEw=s64-c-rp-mo-br100",
                "link": "https://www.google.com/maps/contrib/106258497455214725485/reviews?hl=en-US",
                "reviews": 8,
                "photos": 8
            },
            "media": [
                {
                    "type": "image",
                    "imageUrl": "https://lh3.googleusercontent.com/grass-cs/ANxoTn2PRnwT_6WUKmI9sux_bMMKLAkafhsMxlI7f1IXtDh7ncTTHnQqIflstN5dgNnJnBU-MFZfPnOGZhgxFrqkJkA8kWmAfStrU3JgZ1Tvd_aio0YnTrNnLarlBHkCL9GzuWlhqeF7=k-no"
                }
            ],
            "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUR6aHJqcmdRRRAB!2m1!1s0x0:0x5cf3ba52ead0dd31!3m1!1s2@1:CIHM0ogKEICAgIDzhrjrgQE%7C%7C?hl=en-US",
            "id": "ChdDSUhNMG9nS0VJQ0FnSUR6aHJqcmdRRRAB"
        }
    ],
    "nextPageToken": "OmBDQVFTUkVOcVJVbEJVa2x3UTJkdlFWQTNYMHgwWTB4c1psOWZYMFZvUTNGbk1EVjJlRlJ0YVdoNGIxZG1kV05CUVVGQlFVZG5iams1UzNORFkwRkxTR1YwYjFsQlEwbEJKAA==",
    "credits": 1
}
```

### Aset Visual

> Jika di kebutuhan Aset Visual, nantinya tidak ada di data berikut ini maka kosong atau replace yang ada dulu.

```
→ Selalu cek folder /public untuk gambar dan video yang tersedia
→ Format prioritas : WebP (foto), MP4 (video), SVG (ikon/logo)
→ Pastikan semua aset sudah dikompresi sebelum digunakan
```

### Menu / Layanan & Harga

> Jika di kebutuhan Menu / Layanan Harga, nantinya tidak ada di data berikut ini maka kosong atau replace yang ada dulu.
```
```

---

## 3. Tech Stack & Tools

| Kategori | Tool | Versi | Status |
|---|---|---|---|
| **Framework** | Next.js | Latest (v16+) | ✅ WAJIB |
| **Styling** | Tailwind CSS | v4 | ✅ WAJIB |
| **Animation** | Framer Motion | Latest | ✅ WAJIB |
| **3D / WebGL** | Three.js | Latest | ✅ WAJIB |
| **SEO** | Next.js Metadata API | — | ✅ WAJIB |
| **OG / Social** | Open Graph Meta | — | ✅ WAJIB |
| **Deploy** | Vercel | — | ✅ WAJIB |
| **Font** | Google Fonts | — | Sesuaikan brand |
| **Icons** | Lucide Icons | Latest | Rekomendasi |
| **Form** | EmailJS | — | ✅ WAJIB |
| **ALPINE.JS** | ALPINE.JS | — | ✅ WAJIB |

### TODO — Setup Awal
- [ ] `npx create-next-app@latest [project-name] --typescript --tailwind --app`
- [ ] Install dependencies: `npm i framer-motion three @types/three`
- [ ] Konfigurasi `tailwind.config.ts` dengan design tokens brand
- [ ] Buat `src/constants/siteConfig.ts` — isi semua data dari bab [Data Klien]
- [ ] Setup metadata SEO di `src/app/layout.tsx`
- [ ] Setup Open Graph image di `public/og-image.jpg` (1200×630px)
- [ ] Hubungkan repo ke Vercel sebelum mulai coding

---

## 4. Design System

> Definisikan semua token di sini sebelum menyentuh komponen apapun.

### Color Palette
```css
:root {
  --color-primary    : #[ ];   /* Brand color utama */
  --color-secondary  : #[ ];   /* Brand color pendukung */
  --color-accent     : #[ ];   /* Highlight / CTA */
  --color-bg         : #[ ];   /* Background utama */
  --color-bg-alt     : #[ ];   /* Background seksi selang-seling */
  --color-text       : #[ ];   /* Teks utama */
  --color-text-muted : #[ ];   /* Teks pendukung / caption */
}
```

### Typography
```css
:root {
  --font-heading : '[ ]', serif;       /* Display / Heading — pilih yang bold & karakter */
  --font-body    : '[ ]', sans-serif;  /* Body — bersih dan mudah dibaca */
}

/* Skala ukuran */
--text-xs   : 0.75rem;   /* 12px — caption */
--text-sm   : 0.875rem;  /* 14px — label */
--text-base : 1rem;      /* 16px — body */
--text-lg   : 1.25rem;   /* 20px — sub-heading */
--text-xl   : 1.5rem;    /* 24px */
--text-2xl  : 2rem;      /* 32px — section heading */
--text-3xl  : 3rem;      /* 48px — hero headline */
--text-4xl  : 4.5rem;    /* 72px — hero utama */
```

### Spacing & Layout
```css
--section-py     : 5rem;     /* Padding vertikal tiap seksi */
--container-max  : 1280px;   /* Max width konten */
--container-px   : 1.5rem;   /* Padding horizontal */
--radius-md      : 8px;
--radius-lg      : 16px;
--radius-full    : 9999px;
```

### Animation Tokens (Framer Motion)
```ts
// src/constants/animation.ts
export const fadeUp = {
  hidden : { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
}

export const scaleIn = {
  hidden : { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}
```

### TODO — Design System
- [ ] Tentukan palet warna sesuai identitas brand sebelum mulai coding
- [ ] Pilih 2 font: 1 display (heading) + 1 sans-serif (body) — import di `layout.tsx`
- [ ] Semua warna, font, radius wajib pakai CSS variables — no hard-code
- [ ] Buat `src/constants/animation.ts` untuk semua Framer Motion variants
- [ ] Buat komponen `<Button>` dengan varian: `primary`, `secondary`, `ghost`

---

## 5. Struktur Folder Project

```
📦 [project-name]/
├── 📂 public/
│   ├── images/
│   │   ├── hero/          ← foto hero section
│   │   ├── gallery/       ← foto galeri / portofolio
│   │   ├── team/          ← foto tim / staf
│   │   └── logo.svg
│   ├── videos/            ← video background (jika ada)
│   └── og-image.jpg       ← Open Graph image (1200×630px)
│
├── 📂 src/
│   ├── 📂 app/
│   │   ├── layout.tsx     ← SEO metadata + font + global provider
│   │   ├── page.tsx       ← perakitan semua section
│   │   └── globals.css    ← CSS variables + base styles
│   │
│   ├── 📂 components/
│   │   ├── 📂 layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── 📂 sections/
│   │       ├── HeroSection.tsx
│   │       ├── StatsBar.tsx
│   │       ├── AboutSection.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── GallerySection.tsx
│   │       ├── PricingSection.tsx
│   │       ├── TestimoniSection.tsx
│   │       ├── TeamSection.tsx
│   │       ├── FAQSection.tsx
│   │       ├── CTASection.tsx
│   │       └── ContactSection.tsx
│   │
│   ├── 📂 three/          ← semua Three.js scene & canvas components
│   │   ├── HeroCanvas.tsx
│   │   └── BgParticles.tsx
│   │
│   ├── 📂 constants/
│   │   ├── siteConfig.ts  ← SINGLE SOURCE OF TRUTH semua data klien
│   │   └── animation.ts   ← Framer Motion variants terpusat
│   │
│   └── 📂 hooks/
│       ├── useScrollY.ts
│       └── useInView.ts
│
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

### TODO — Struktur
- [ ] Buat seluruh folder dan file sesuai diagram di atas
- [ ] Isi `siteConfig.ts` lengkap dari data bab [Data Klien] sebelum coding komponen
- [ ] Semua Three.js logic masuk ke folder `/three` — jangan campur dengan UI components
- [ ] `page.tsx` hanya boleh berisi perakitan section — tidak ada logic di sini

---

## 6. Arsitektur Landing Page

> Urutan seksi mengikuti alur psikologis: **Tarik perhatian → Bangun kepercayaan → Dorong aksi.**
> Data konten seluruhnya mengacu pada bab [Data Klien Google Maps].

```
┌──────────────────────────────────────┐
│  NAVBAR                              │
├──────────────────────────────────────┤
│  HERO SECTION                        │
├──────────────────────────────────────┤
│  STATS BAR                           │
├──────────────────────────────────────┤
│  ABOUT SECTION                       │
├──────────────────────────────────────┤
│  SERVICES SECTION                    │
├──────────────────────────────────────┤
│  GALLERY SECTION                     │
├──────────────────────────────────────┤
│  PRICING SECTION        (opsional)   │
├──────────────────────────────────────┤
│  TESTIMONI SECTION                   │
├──────────────────────────────────────┤
│  TEAM SECTION           (opsional)   │
├──────────────────────────────────────┤
│  FAQ SECTION                         │
├──────────────────────────────────────┤
│  CTA SECTION                         │
├──────────────────────────────────────┤
│  CONTACT SECTION                     │
├──────────────────────────────────────┤
│  FOOTER                              │
└──────────────────────────────────────┘
```

---

### 🔝 NAVBAR

**File:**
```
src/components/layout/
├── Navbar.tsx
└── navbar.css          (jika pakai CSS Modules)
```

**Elemen:**
- Logo (SVG dari `/public/images/logo.svg`)
- Menu: `Tentang` · `Layanan` · `Galeri` · `Kontak`
- Tombol CTA: `Hubungi Kami` / `Pesan Sekarang`
- Hamburger menu (mobile)

**TODO:**
- [ ] `position: sticky; top: 0` + `backdrop-blur-md`
- [ ] Tambah shadow saat `scrollY > 50` via `useScrollY` hook
- [ ] Semua menu item gunakan smooth scroll ke anchor section
- [ ] Aktif state pada menu sesuai section yang sedang terlihat (IntersectionObserver)
- [ ] Responsif: desktop nav links · mobile hamburger

---

### 🦸 HERO SECTION

**File:**
```
src/components/sections/
├── HeroSection.tsx
src/three/
└── HeroCanvas.tsx      ← Three.js canvas di background hero
```

**Elemen:**
- **Three.js Canvas** — background full-viewport (particle system / geometry 3D / shader)
- **Headline** — max 8 kata, kuat dan langsung menjelaskan value brand
- **Sub-headline** — 1–2 kalimat pendukung, max 20 kata
- **CTA Primer** — `Pesan Sekarang` / `Lihat Layanan`
- **CTA Sekunder** — `Pelajari Lebih Lanjut` (ghost button)
- **Badge rating** — tampilkan rating Google Maps dan jumlah ulasan

**TODO:**
- [ ] HeroCanvas: Three.js scene (particles / floating geometry) sebagai bg full-viewport
- [ ] Framer Motion: `fadeUp` stagger pada headline → sub-headline → CTA
- [ ] Tinggi hero: `min-h-screen` dengan layout `relative` untuk overlay konten di atas canvas
- [ ] Pastikan teks tetap terbaca di atas canvas (gunakan overlay atau text-shadow)
- [ ] Copywriting headline mengacu pada nama brand + niche dari `siteConfig.ts`

---

### 📊 STATS BAR

**File:** `src/components/sections/StatsBar.tsx`

**Elemen (pilih 3–4 yang relevan):**
- ⭐ Rating Google Maps
- 🗓️ Tahun Berdiri / Pengalaman
- 👥 Total Pelanggan / Ulasan
- ✅ Layanan / Proyek Selesai

**TODO:**
- [ ] Framer Motion counter animasi angka saat masuk viewport
- [ ] Grid horizontal 3–4 kolom · 2 kolom mobile
- [ ] Data angka ambil dari `siteConfig.ts`

---

### 🏢 ABOUT SECTION

**File:** `src/components/sections/AboutSection.tsx`

**Elemen:**
- Foto brand / tempat / tim
- Paragraf misi & nilai (max 3 paragraf, masing-masing max 3 kalimat)
- Highlight USP (Unique Selling Point) brand

**TODO:**
- [ ] Layout dua kolom: teks + visual (desktop) · stack vertikal (mobile)
- [ ] Framer Motion `fadeUp` pada teks saat scroll masuk viewport
- [ ] Gunakan foto asli dari `/public/images/` — bukan stock photo

---

### 🛠️ SERVICES SECTION

**File:** `src/components/sections/ServicesSection.tsx`

**Elemen per kartu:**
- Ikon representatif (Lucide Icons)
- Nama layanan
- Deskripsi 1–2 kalimat
- Harga (jika tersedia di Data Klien)

**TODO:**
- [ ] Grid 3 kolom (desktop) · 2 kolom (tablet) · 1 kolom (mobile)
- [ ] Hover effect: `scale(1.03)` + `shadow-lg` via Framer Motion `whileHover`
- [ ] Data layanan ambil dari array di `siteConfig.ts`
- [ ] Maksimal 6 layanan ditampilkan

---

### 🖼️ GALLERY SECTION

**File:** `src/components/sections/GallerySection.tsx`

**Elemen:**
- Grid foto / portofolio (dari `/public/images/gallery/`)
- Lightbox popup saat diklik
- Label / caption singkat (opsional)

**TODO:**
- [ ] Selalu cek `/public` untuk aset yang tersedia sebelum coding
- [ ] Semua gambar pakai `next/image` dengan `loading="lazy"`
- [ ] Grid masonry atau grid seragam sesuai estetika niche
- [ ] Framer Motion `AnimatePresence` untuk transisi lightbox
- [ ] Format gambar WebP, ukuran max 300KB per foto

---

### 💰 PRICING SECTION *(opsional)*

**File:** `src/components/sections/PricingSection.tsx`

**Elemen per kartu:**
- Nama paket
- Harga (dari Data Klien)
- Checklist fitur
- Tombol CTA per paket
- Badge "Paling Populer" untuk paket unggulan

**TODO:**
- [ ] Aktifkan seksi ini hanya jika data harga tersedia di [Data Klien]
- [ ] Grid 3 kolom sejajar · 1 kolom mobile
- [ ] Highlight paket unggulan dengan border atau warna berbeda

---

### ⭐ TESTIMONI SECTION

**File:** `src/components/sections/TestimoniSection.tsx`

**Elemen per kartu:**
- Rating bintang
- Kutipan testimoni (dari Data Klien Google Maps)
- Nama reviewer
- Foto profil / avatar inisial

**TODO:**
- [ ] Carousel / slider dengan Framer Motion drag gesture
- [ ] Ambil data testimoni dari `siteConfig.ts` (bersumber dari bab Data Klien)
- [ ] Tampilkan minimal 3 testimoni

---

### 👥 TEAM SECTION *(opsional)*

**File:** `src/components/sections/TeamSection.tsx`

**Elemen per kartu:**
- Foto (dari `/public/images/team/`)
- Nama + Jabatan
- Keahlian singkat
- Link sosial (opsional)

**TODO:**
- [ ] Aktifkan hanya jika data tim tersedia di [Data Klien]
- [ ] Grid 3–4 kolom desktop · 2 kolom mobile
- [ ] Hover reveal: bio singkat dengan Framer Motion overlay

---

### ❓ FAQ SECTION

**File:** `src/components/sections/FAQSection.tsx`

**Format:** Accordion buka/tutup -> Alpine.JS

**TODO:**
- [ ] 6–10 pertanyaan paling relevan dengan niche bisnis
- [ ] Framer Motion `AnimatePresence` + `layout` untuk animasi accordion smooth
- [ ] Tambahkan link ke kontak di akhir: *"Masih ada pertanyaan? → Hubungi Kami"*

---

### 📣 CTA SECTION

**File:** `src/components/sections/CTASection.tsx`

**Elemen:**
- Headline mendesak (1 kalimat)
- Sub-teks pendukung
- Tombol CTA tunggal berukuran besar
- Background kontras (gunakan `--color-primary`)

**TODO:**
- [ ] Satu tombol CTA saja — tidak lebih
- [ ] Three.js atau Framer Motion efek di background (particle / gradient animated)
- [ ] Tombol minimal tinggi 52px, font weight bold
- [ ] Tambahkan elemen urgensi jika relevan ("Slot terbatas" / "Promo bulan ini")

---

### 📍 CONTACT SECTION

**File:** `src/components/sections/ContactSection.tsx`

**Elemen:**
- Tombol WhatsApp (`https://wa.me/62xxx`) — dari Data Klien
- Google Maps embed (`LINK GOOGLE MAPS` dari Data Klien)
- Alamat lengkap
- Jam operasional
- Form kontak: Nama · Email · Pesan

**TODO:**
- [ ] Google Maps embed responsif (`width: 100%`, `aspect-ratio: 16/9`)
- [ ] Tombol WhatsApp membuka chat langsung
- [ ] Form kontak terkoneksi EmailJS / Formspree
- [ ] Konfirmasi sukses setelah form terkirim (Framer Motion toast / modal)

---

### 🔻 FOOTER

**File:** `src/components/layout/Footer.tsx`

**Elemen:**
- Logo
- Navigasi cepat
- Sosial media
- Alamat singkat
- Copyright: `© [TAHUN] [NAMA BRAND]. All rights reserved.`

**TODO:**
- [ ] Grid 3–4 kolom desktop · stack mobile
- [ ] Semua link footer berfungsi benar
- [ ] Tambahkan link Kebijakan Privasi jika ada form pengumpulan data

---

## ✅ Checklist Pre-Launch

### Visual & Responsif
- [ ] Tes di: Mobile 375px · Tablet 768px · Desktop 1280px · Wide 1920px
- [ ] Semua gambar punya `alt` text deskriptif
- [ ] Tidak ada overflow atau teks terpotong

### Performa
- [ ] Lighthouse Performance ≥ **85**
- [ ] Semua gambar WebP, max 300KB
- [ ] Three.js canvas tidak memblokir render utama (gunakan `Suspense` / dynamic import)

### SEO & Meta
- [ ] `<title>` unik, max 60 karakter
- [ ] `<meta description>` diisi, max 160 karakter
- [ ] Open Graph image tersedia di `public/og-image.jpg`
- [ ] Hierarki heading benar: `H1 → H2 → H3`
- [ ] Google Search Console terhubung

### Fungsionalitas
- [ ] Semua CTA berfungsi dan mengarah tepat
- [ ] Link WhatsApp membuka nomor yang benar
- [ ] Form kontak terkirim + ada konfirmasi sukses
- [ ] Google Maps embed tampil dan interaktif
- [ ] Smooth scroll berfungsi di semua browser

### Cross-Browser
- [ ] Chrome · Firefox · Safari · Edge ✓
- [ ] iOS Safari · Android Chrome ✓

---

*Senior Frontend Engineer · Senior UI/UX Engineer · Senior Product Engineer*
*Template v2.0 — Bahasa Indonesia — 2026*
