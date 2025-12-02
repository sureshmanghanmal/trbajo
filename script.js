// --- DATOS GLOBALES ---

// MAPEO DE CARACTERÍSTICAS A ICONOS Y ETIQUETAS
const featureLabels = {
    bar: { icon: 'fa-cocktail', label: 'Bar Completo' },
    sonido: { icon: 'fa-music', label: 'Sonido Premium' },
    wifi: { icon: 'fa-wifi', label: 'Wi-Fi' },
    privacidad: { icon: 'fa-user-secret', label: 'Ventanas de Privacidad' },
    pista: { icon: 'fa-compact-disc', label: 'Pista de Baile' },
    gps: { icon: 'fa-map-marked-alt', label: 'Navegación GPS' }
};

const typeLabels = {
    clasica: { title: 'Limusinas Clásicas', icon: 'fa-car', description: 'Elegancia atemporal y lujo para bodas y eventos formales.' },
    suv: { title: 'Limusinas SUV y Party Bus', icon: 'fa-truck-pickup', description: 'Espacio, diversión y capacidad para grupos grandes. Perfectas para fiestas.' },
    sedan: { title: 'Sedanes y Coches Ejecutivos', icon: 'fa-gem', description: 'Discreción, confort de primera clase y chofer profesional para VIPs y negocios.' },
    deportivo: { title: 'Deportivos y Exóticos', icon: 'fa-tachometer-alt', description: 'Máxima velocidad y estilo. Disponible para alquiler sin chófer (según modelo).' }
};

// BASE DE DATOS DE LIMUSINAS Y COCHES DE LUJO (URLs de fotos mejoradas)
const fleetData = [
    // --- LIMUSINAS CLÁSICAS (Clasica) ---
    { id: 1, name: "Lincoln Town Car (Clásica)", type: "clasica", capacity: "8-10", features: ["bar", "sonido"], hasDriver: true, basePricePerHour: 80, img: "https://images.unsplash.com/photo-1629828552399-52e850b556b6?w=400&h=300&fit=crop&q=80&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, name: "Chrysler 300C (Clásica Elegante)", type: "clasica", capacity: "8-10", features: ["bar", "sonido", "wifi"], hasDriver: true, basePricePerHour: 90, img: "https://images.unsplash.com/photo-1596701083204-629a67475d4d?w=400&h=300&fit=crop&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 9, name: "Rolls-Royce Phantom Limo", type: "clasica", capacity: "12-14", features: ["bar", "sonido", "privacidad"], hasDriver: true, basePricePerHour: 250, img: "https://images.unsplash.com/photo-1579737194165-274291845f34?w=400&h=300&fit=crop&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    // --- LIMUSINAS SUV (SUV) ---
    { id: 2, name: "Hummer H2 (SUV Gigante)", type: "suv", capacity: "16+", features: ["bar", "sonido", "wifi"], hasDriver: true, basePricePerHour: 150, img: "https://images.unsplash.com/photo-1582299868735-d226a0b16f15?w=400&h=300&fit=crop&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Cadillac Escalade (SUV Ejecutiva)", type: "suv", capacity: "1-2", features: ["sonido", "wifi"], hasDriver: true, basePricePerHour: 120, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 10, name: "Party Bus (Mega Fiesta)", type: "suv", capacity: "16+", features: ["bar", "sonido", "wifi", "pista"], hasDriver: true, basePricePerHour: 300, img: "https://images.unsplash.com/photo-1544620023-e5163e7c09d5?w=400&h=300&fit=crop&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    
    // --- COCHES DE LUJO (Sedan) ---
    { id: 4, name: "Mercedes Clase S (Sedán Lujo)", type: "sedan", capacity: "solo 4", features: ["wifi"], hasDriver: true, basePricePerHour: 70, img: "https://images.unsplash.com/photo-1627806543950-e88924e29d66?w=400&h=300&fit=crop&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 8, name: "BMW Serie 7 (Sedán Ejecutivo)", type: "sedan", capacity: "solo 4", features: ["wifi", "sonido"], hasDriver: true, basePricePerHour: 75, img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 12, name: "Bentley Continental GT", type: "sedan", capacity: "solo 4", features: ["wifi", "privacidad", "sonido"], hasDriver: true, basePricePerHour: 180, img: "https://images.unsplash.com/photo-1608643190890-e55490e29b10?w=400&h=300&fit=crop&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    // --- COCHES DEPORTIVOS ---
    { id: 11, name: "Ferrari F8 Tributo (Deportivo)", type: "deportivo", capacity: "solo 2", features: ["sonido", "gps"], hasDriver: false, basePricePerHour: 400, img: "https://images.unsplash.com/photo-1604111307130-1c00f13e73a2?w=400&h=300&fit=crop&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 13, name: "Lamborghini Huracán", type: "deportivo", capacity: "solo 2", features: ["sonido", "gps"], hasDriver: false, basePricePerHour: 500, img: "https://images.unsplash.com/photo-1594950346067-27b92ce5d648?w=400&h=300&fit=crop&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];


// --- LÓGICA DE INICIALIZACIÓN ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica para la página principal (index.html)
    if (document.getElementById('search-form')) {
        initializeSearchPage();
    }

    // 2. Lógica para la página de Flota (flota.html)
    if (document.getElementById('flota-clasificada-container')) {
        renderClassifiedFleet();
    }

    // Lógica común (smooth scroll, etc.)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Solo para anclas internas en la misma página
            if (this.hostname === location.hostname && this.pathname === location.pathname) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});


// --- FUNCIÓN DE RENDERIZADO DE FLOTA CLASIFICADA (flota.html) ---

function renderClassifiedFleet() {
    const container = document.getElementById('flota-clasificada-container');
    container.innerHTML = '';

    // Agrupar vehículos por tipo
    const classifiedFleet = fleetData.reduce((acc, limo) => {
        const type = limo.type;
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(limo);
        return acc;
    }, {});

    // Ordenar por tipo: Clásicas, SUV, Sedán, Deportivo
    const typeOrder = ['clasica', 'suv', 'sedan', 'deportivo'];

    // Crear la lista clasificada
    typeOrder.forEach(typeKey => {
        const vehicles = classifiedFleet[typeKey];
        if (!vehicles || vehicles.length === 0) return;

        const typeInfo = typeLabels[typeKey];
        if (!typeInfo) return;

        // 1. Sección de Encabezado (Ej: Limusinas Clásicas)
        const typeHeader = document.createElement('div');
        typeHeader.classList.add('fleet-type-header');
        typeHeader.style.padding = '50px 0 20px';
        typeHeader.style.maxWidth = '1000px';
        typeHeader.style.margin = '0 auto';

        typeHeader.innerHTML = `
            <h2 style="margin-bottom: 5px; color: var(--secondary);">
                <i class="fas ${typeInfo.icon}" style="color: var(--primary);"></i> ${typeInfo.title}
            </h2>
            <p class="section-subtitle" style="margin-bottom: 30px; margin-top: 10px;">
                ${typeInfo.description}
            </p>
        `;
        container.appendChild(typeHeader);
        
        // 2. Grid de Vehículos para esta categoría
        const grid = document.createElement('div');
        grid.classList.add('fleet-grid-custom'); // Clase específica para el grid de flota
        grid.style.maxWidth = '1000px';
        grid.style.margin = '0 auto 60px';
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
        grid.style.gap = '30px';

        vehicles.forEach(limo => {
            const card = document.createElement('div');
            card.classList.add('limo-card');
            card.style.gridTemplateColumns = '1fr'; // Vista de tarjeta simple en la flota

            const featuresSummary = limo.features.map(f => featureLabels[f].label).join(', ') || 'Sin extras';
            const driverStatus = limo.hasDriver ? 
                '<span style="color: green; font-weight: 600;"><i class="fas fa-user-tie"></i> Chófer Incluido</span>' : 
                '<span style="color: orange; font-weight: 600;"><i class="fas fa-key"></i> Solo Alquiler</span>';

            card.innerHTML = `
                <img src="${limo.img}" alt="${limo.name}" onerror="this.src='https://via.placeholder.com/400x300?text=${limo.name.split(' ')[0]}'" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px 10px 0 0;">
                <div class="limo-details" style="padding: 20px; text-align: left;">
                    <h3 style="font-size: 1.3em; color: var(--secondary); margin-bottom: 10px;">${limo.name}</h3>
                    <div class="limo-info" style="display: flex; flex-direction: column; gap: 8px;">
                        <span><i class="fas fa-users"></i> Capacidad: ${limo.capacity}</span>
                        <span><i class="fas fa-money-bill-alt"></i> Precio Base: $${limo.basePricePerHour}/hora</span>
                        ${driverStatus}
                        <hr style="border: 0; border-top: 1px dashed #ddd; margin: 5px 0;">
                        <span style="font-size: 0.9em; color: #666;"><i class="fas fa-star"></i> Extras: ${featuresSummary}</span>
                    </div>
                    <a href="index.html#buscar" class="cta-button" style="width: 100%; margin-top: 20px; text-align: center; padding: 10px;">
                         <i class="fas fa-search"></i> Ver Precio y Reservar
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });

        container.appendChild(grid);
    });

    if (container.children.length === 0) {
         container.innerHTML = `
            <div class="initial-message">
                <i class="fas fa-car-crash"></i><br>
                Error al cargar la flota. Vuelve a intentarlo más tarde.
            </div>
        `;
    }
}


// --- LÓGICA DE LA PÁGINA DE BÚSQUEDA (index.html) ---

function initializeSearchPage() {
    const form = document.getElementById('search-form');
    const resultsContainer = document.getElementById('results-container');
    const durationInput = document.getElementById('duracion');
    const tipoServicioSelect = document.getElementById('tipo-servicio');

    // Maneja el envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        filterAndDisplayResults();
    });
    
    // Filtros en tiempo real
    let durationTimer;
    durationInput.addEventListener('input', () => {
        clearTimeout(durationTimer);
        durationTimer = setTimeout(filterAndDisplayResults, 500);
    });
    
    tipoServicioSelect.addEventListener('change', filterAndDisplayResults);
    
    document.querySelectorAll('.filters-grid input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', filterAndDisplayResults);
    });

    // FUNCIÓN PRINCIPAL DE FILTRADO Y VISUALIZACIÓN
    function filterAndDisplayResults() {
        const duration = parseInt(durationInput.value) || 1;
        const selectedServiceType = tipoServicioSelect.value;
        
        const selectedCapacity = Array.from(document.querySelectorAll('input[name="capacidad"]:checked')).map(cb => cb.value);
        const selectedType = Array.from(document.querySelectorAll('input[name="tipo"]:checked')).map(cb => cb.value);
        const selectedComodidades = Array.from(document.querySelectorAll('input[name="comodidad"]:checked')).map(cb => cb.value);

        const filteredLimos = fleetData.filter(limo => {
            // Filtro por Tipo de Servicio
            if (selectedServiceType === 'con-chofer' && !limo.hasDriver) return false;
            if (selectedServiceType === 'sin-chofer' && limo.hasDriver) return false;

            // Filtro por Capacidad (OR)
            if (selectedCapacity.length > 0 && !selectedCapacity.includes(limo.capacity)) return false;

            // Filtro por Tipo de Vehículo (OR)
            if (selectedType.length > 0 && !selectedType.includes(limo.type)) return false;
            
            // Filtro por Comodidades (AND: debe tener TODAS)
            if (selectedComodidades.length > 0) {
                const hasAllFeatures = selectedComodidades.every(
                    feature => limo.features.includes(feature)
                );
                if (!hasAllFeatures) return false;
            }

            return true;
        });

        displayResults(filteredLimos, duration, selectedServiceType);
    }

    // FUNCIÓN PARA MOSTRAR LOS RESULTADOS
    function displayResults(filteredLimos, duration, serviceType) {
        resultsContainer.innerHTML = '';
        
        if (filteredLimos.length === 0) {
            resultsContainer.innerHTML = `
                <div class="initial-message">
                    <i class="fas fa-search"></i><br>
                    No se encontraron vehículos que coincidan con sus criterios de búsqueda.
                    <br><br>
                    <small>Intenta ajustar los filtros para ver más opciones.</small>
                </div>
            `;
            return;
        }

        filteredLimos.sort((a, b) => a.basePricePerHour - b.basePricePerHour);

        filteredLimos.forEach(limo => {
            const limoCard = createLimoCard(limo, duration, serviceType);
            resultsContainer.appendChild(limoCard);
        });

        // Animación de entrada
        const cards = resultsContainer.querySelectorAll('.limo-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // FUNCIÓN PARA CREAR UNA TARJETA DE LIMUSINA (index.html)
    function createLimoCard(limo, duration, serviceType) {
        const totalPrice = (limo.basePricePerHour * duration).toFixed(2);
        const driverStatus = limo.hasDriver ? 
            '<i class="fas fa-user-tie"></i> Incluye Chófer' : 
            '<i class="fas fa-key"></i> Solo Alquiler';
        const priceLabel = serviceType === 'con-chofer' ? 'Precio Total Estimado' : 'Costo de Alquiler';

        const featuresHTML = limo.features.map(feature => {
            const featureInfo = featureLabels[feature];
            return `<span><i class="fas ${featureInfo.icon}"></i> ${featureInfo.label}</span>`;
        }).join('');

        const limoCard = document.createElement('div');
        limoCard.classList.add('limo-card');
        
        limoCard.innerHTML = `
            <img src="${limo.img}" alt="${limo.name}" onerror="this.src='https://via.placeholder.com/180x120?text=Limusina'">
            
            <div class="limo-details">
                <h3>${limo.name}</h3>
                <p class="limo-description">Vehículo ${typeLabels[limo.type].title.toLowerCase().replace('limusinas ', '')} con capacidad para ${limo.capacity} personas.</p>
                <div class="limo-info">
                    <span><i class="fas fa-users"></i> Capacidad: ${limo.capacity}</span>
                    <span><i class="fas fa-money-bill-alt"></i> Precio Base: $${limo.basePricePerHour}/hora</span>
                    <span>${driverStatus}</span>
                    <hr style="width: 100%; border: 0; border-top: 1px solid #eee; margin: 5px 0;">
                    ${featuresHTML}
                </div>
            </div>
            
            <div class="limo-reservation">
                <p class="limo-price">$${totalPrice}</p>
                <p>${priceLabel} (para ${duration} horas)</p>
                <button class="cta-button">
                    <i class="fas fa-calendar-check"></i> Reservar
                </button>
            </div>
        `;
        return limoCard;
    }

    filterAndDisplayResults();
}