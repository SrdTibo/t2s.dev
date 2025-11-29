// app/centralrp/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CentralRP – Présentation",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CentralRPPage() {
  return (
    <main className="crp-page">
      <div className="crp-inner">
        {/* LOGO */}
        <header className="crp-header">
          <div className="crp-logo-wrap">
            <Image
              src="/centralrp-logo.png"
              alt="Logo CentralRP"
              width={220}
              height={220}
              className="crp-logo"
              priority
            />
          </div>
        </header>

        {/* QU’EST-CE QUE C’EST ? */}
        <section className="crp-section">
          <h2 className="crp-section-title">
            🎯 QU’EST-CE QUE C’EST ?
          </h2>
          <p className="crp-text">
            La plateforme sert de centre de contrôle unique pour votre
            organisation GTA RP. Elle structure toutes vos informations :
            membres, grades, règles, objectifs du jour, récoltes, dons, ventes,
            commandes, avertissements et hiérarchie. Au lieu de jongler entre
            plusieurs salons Discord, documents ou notes, tout est regroupé
            dans une interface pensée pour le jeu de rôle.
          </p>
        </section>

        {/* FONCTIONNALITÉS */}
        <section className="crp-section">
          <h2 className="crp-section-title">
            🛠️ FONCTIONNALITÉS INCLUSES POUR TOUS LES ABONNEMENTS
          </h2>

          <div className="crp-features-grid">
            <div className="crp-feature-col">
              <h3>✔ Gestion des absences</h3>
              <ul>
                <li>Déclaration d’absence du X au X</li>
                <li>Choix d’une raison d’absence</li>
                <li>Historique consultable par les gradés</li>
              </ul>

              <h3>✔ Gestion quotidienne</h3>
              <ul>
                <li>Annonces du jour</li>
                <li>Objectifs du jour</li>
                <li>Canal radio du jour</li>
                <li>Dons du jour</li>
                <li>Récoltes du jour (sessions champs)</li>
              </ul>

              <h3>✔ Pages informatives</h3>
              <ul>
                <li>Règlements</li>
                <li>Page “Qui sommes-nous”</li>
                <li>Liste des partenaires</li>
                <li>Autres pages (prix rachat, points GPS, etc.)</li>
              </ul>
            </div>

            <div className="crp-feature-col">
              <h3>✔ Gestion des membres</h3>
              <ul>
                <li>Liste des membres (Nom / Prénom / Téléphone InGame)</li>
                <li>Suivi des informations internes par membre</li>
                <li>Ajout, édition, retrait (selon le grade)</li>
              </ul>

              <h3>✔ Avertissements</h3>
              <ul>
                <li>Création d’avertissements par le leader/responsables</li>
                <li>Système “Lu / non lu” pour le membre</li>
                <li>Historique interne des sanctions</li>
              </ul>

              <h3>✔ Gestion hiérarchique</h3>
              <ul>
                <li>Grades personnalisés</li>
                <li>Permissions par grade</li>
                <li>Pages visibles uniquement par certains rôles</li>
              </ul>

              <h3>✔ Mobile-friendly</h3>
              <ul>
                <li>Interface optimisée pour téléphone</li>
                <li>Consultation rapide même en pleine session RP</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AVANTAGES */}
        <section className="crp-section">
          <h2 className="crp-section-title">
            💡 AVANTAGES PAR RAPPORT À UNE GESTION UNIQUEMENT SUR DISCORD
          </h2>

          <div className="crp-advantages-cards">
            <div className="crp-adv-card">
              <h3>📚 TOUTES LES INFORMATIONS CENTRALISÉES</h3>
            </div>
            <div className="crp-adv-card">
              <h3>📱 UTILISATION RAPIDE ET INTUITIVE</h3>
            </div>
            <div className="crp-adv-card">
              <h3>⚙️ ORGANISATION ET AUTOMATISATION</h3>
            </div>
            <div className="crp-adv-card">
              <h3>🔒 MOINS D’ERREURS HUMAINES</h3>
            </div>
          </div>

          <p className="crp-text crp-adv-text">
            Les informations clés ne dépendent plus d’un message écrit “quelque
            part” sur Discord. Elles sont enregistrées dans une base structurée,
            avec historique et permissions claires.
          </p>
        </section>

        {/* ABONNEMENTS */}
        <section className="crp-section">
          <h2 className="crp-section-title">💳 ABONNEMENTS DISPONIBLES</h2>

          <div className="crp-pricing-header">
            <p>
              Tous les abonnements ont exactement les mêmes fonctionnalités.
              <br />
              Le seul critère de tarif : le nombre de membres dans votre
              organisation GTA RP.
            </p>
          </div>

          <div className="crp-pricing-grid">
            <article className="crp-plan crp-plan--small">
              <div className="crp-plan-header">
                <div className="crp-plan-name">ABONNEMENT SMALL</div>
                <div className="crp-plan-members">Jusqu’à 10 membres</div>
              </div>
              <div className="crp-plan-price">7,99 € / mois</div>
              <div className="crp-plan-body">
                <p>Idéal pour :</p>
                <ul className="crp-plan-list">
                  <li>petites organisations</li>
                  <li>débuts de factions</li>
                  <li>groupes familiaux ou restreints</li>
                </ul>
              </div>
            </article>

            <article className="crp-plan crp-plan--medium">
              <div className="crp-plan-header">
                <div className="crp-plan-name">ABONNEMENT MEDIUM</div>
                <div className="crp-plan-members">De 11 à 25 membres</div>
              </div>
              <div className="crp-plan-price">12,99 € / mois</div>
              <div className="crp-plan-body">
                <p>Idéal pour :</p>
                <ul className="crp-plan-list">
                  <li>organisations déjà installées</li>
                  <li>structures en croissance</li>
                  <li>organisations orientées business</li>
                </ul>
              </div>
            </article>

            <article className="crp-plan crp-plan--large">
              <div className="crp-plan-header">
                <div className="crp-plan-name">ABONNEMENT LARGE</div>
                <div className="crp-plan-members">De 26 à 50 membres</div>
              </div>
              <div className="crp-plan-price">19,99 € / mois</div>
              <div className="crp-plan-body">
                <p>Idéal pour :</p>
                <ul className="crp-plan-list">
                  <li>organisations structurées</li>
                  <li>groupes très actifs</li>
                  <li>
                    équipes avec plusieurs pôles (terrain, business, logistique)
                  </li>
                </ul>
              </div>
            </article>

            <article className="crp-plan crp-plan--xl">
              <div className="crp-plan-header">
                <div className="crp-plan-name">ABONNEMENT XL</div>
                <div className="crp-plan-members">De 51 à 100 membres</div>
              </div>
              <div className="crp-plan-price">34,99 € / mois</div>
              <div className="crp-plan-body">
                <p>Idéal pour :</p>
                <ul className="crp-plan-list">
                  <li>très grandes organisations</li>
                  <li>factions influentes</li>
                  <li>structures avec énormément d’activité</li>
                  <li>
                    organisations multi-branches (business, opérations, farm)
                  </li>
                </ul>
              </div>
            </article>
          </div>

          <p className="crp-footer-note">
            Document de présentation – tarifs indicatifs susceptibles d’évoluer.
          </p>
        </section>
      </div>
    </main>
  );
}
