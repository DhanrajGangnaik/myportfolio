import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";

export const DATA = {
  name: "Dhanraj Gangnaik",
  initials: "DG",
  url: "https://dhanrajgangnaik.dev",
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/Pune",

  description:
    "Cloud Engineer • DevOps • Blue Team • Self-Hosted Systems",

  summary:
    "I am an Information Technology student specializing in Cloud Technology and Information Security, with a strong interest in designing and operating real-world infrastructure systems.\n\nMy work focuses on building and improving self-hosted private cloud environments, Kubernetes and container platforms, infrastructure automation workflows, CI/CD pipelines, GitOps-based delivery, observability stacks, and security-focused systems.\n\nI enjoy taking complex infrastructure workflows and turning them into automated, reproducible, and scalable systems.",

  avatarUrl: "",

  skills: [
    { name: "Kubernetes" },
    { name: "Docker" },
    { name: "Python" },
    { name: "PostgreSQL" },
    { name: "Linux" },
    { name: "Nginx" },
    { name: "CI/CD" },
    { name: "GitOps" },
    { name: "Prometheus" },
    { name: "Grafana" },
    { name: "Proxmox VE" },
    { name: "Rancher" },
    { name: "Terraform" },
    { name: "Ansible" },
    { name: "AWS" },
    { name: "Gitea" },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: NotebookIcon, label: "Projects" },
  ],

  contact: {
    email: "dhanrajgangnaik47@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DhanrajGangnaik",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhanrajgangnaik",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dhanrajgangnaik47@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  education: [
    {
      school: "Ajeenkya D Y Patil University",
      href: "#",
      degree:
        "B.Tech in Information Technology (Cloud Technology & Information Security)",
      logoUrl: "/education/adypulogo.png",
      start: "2022",
      end: "2026",
    },
  ],

  projects: [
    {
      title: "Self-Hosted Data Platform",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Designed and deployed a self-hosted observability and data platform using Prometheus, Grafana, TimescaleDB, and ClickHouse across multiple Proxmox-based virtual machines for centralized monitoring, metrics storage, and log analytics.",
      technologies: [
        "Prometheus",
        "Grafana",
        "TimescaleDB",
        "ClickHouse",
        "Docker",
        "Linux",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/DhanrajGangnaik/Self-Hosted-Data-Platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/data-platform.png",
      video: "",
    },

    {
      title: "Kubernetes HA Cluster",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Built a highly available Kubernetes cluster using Talos Linux with multiple control plane and worker nodes, integrated with MetalLB, Ingress-NGINX, and Rancher for cluster management and service exposure.",
      technologies: [
        "Kubernetes",
        "Talos",
        "MetalLB",
        "Ingress-NGINX",
        "Rancher",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/DhanrajGangnaik/Kubernetes-HA-Cluster",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/k8s.png",
      video: "",
    },

    {
      title: "CI/CD Pipeline Platform",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Designed and implemented a CI/CD platform using Gitea, Woodpecker CI, and Argo CD to automate build workflows and GitOps-based deployments to Kubernetes environments.",
      technologies: [
        "Gitea",
        "Woodpecker CI",
        "Argo CD",
        "Docker",
        "Kubernetes",
      ],
      links: [],
      image: "/projects/cicd.png",
      video: "",
    },
  ],
} as const;