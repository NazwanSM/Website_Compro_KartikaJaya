// file: components/PetaIndonesiaIcon.jsx

// Menerima 'props' agar kita bisa meneruskan className dan atribut lainnya
export default function PetaIndonesiaIcon(props) {
    return (
        <svg
        // Atribut asli dari file SVG (penting untuk rasio aspek)
        viewBox="0 0 1024 341" 
        xmlns="http://www.w3.org/2000/svg"
        // Meneruskan semua props (termasuk className) ke elemen svg
        {...props} 
        >
        {/* Untuk aksesibilitas, ganti prop `alt` dengan tag <title> di dalam SVG.
            Ini adalah cara standar untuk memberikan judul pada inline SVG.
        */}
        <title>Peta Proyek PT Kartika Jaya Kontruksindo</title>
        
        {/* PASTE SEMUA KODE DARI FILE SVG ANDA DI SINI.
            Hapus atribut 'width', 'height', dan 'fill' dari setiap path jika
            Anda ingin mengontrolnya dari 'className'.
        */}
        <g>
            <path d="M...Z" />
            <path d="M...Z" />
            {/* ... dan semua path lainnya */}
        </g>
        </svg>
    );
}